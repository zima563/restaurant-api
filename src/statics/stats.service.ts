import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { subDays, startOfDay, endOfDay, startOfMonth, endOfMonth, subMonths, eachMonthOfInterval, format } from 'date-fns';
import { BestSellersDto } from './dto/best-sellers.dto';

type Range = 'weekly' | 'monthly' | 'yearly';

@Injectable()
export class StatsService {
  constructor(private prisma: PrismaService) {}

  private buildRange(range: Range) {
    const now = new Date();
    if (range === 'weekly') {
      const from = subDays(now, 6);
      return { from: startOfDay(from), to: endOfDay(now) };
    }
    if (range === 'monthly') {
      return { from: startOfMonth(now), to: endOfMonth(now) };
    }
    // yearly (آخر 12 شهر)
    const from = startOfMonth(subMonths(now, 11));
    const to = endOfMonth(now);
    return { from, to };
  }

  async getDashboard(range: Range = 'monthly') {
    const { from, to } = this.buildRange(range);

    // KPIs
    const [ordersCount, customersCount, totalRevenue] = await Promise.all([
      this.prisma.order.count({ where: { createdAt: { gte: from, lte: to } } }),
      this.prisma.user.count(),
      this.prisma.order.aggregate({
        _sum: { totalPrice: true },
        where: { createdAt: { gte: from, lte: to }, paymentStatus: 'PAID' },
      }),
    ]);

    // إيراد شهري لآخر 12 شهر (لمنحنى)
    const months = eachMonthOfInterval({
      start: startOfMonth(subMonths(new Date(), 11)),
      end: endOfMonth(new Date()),
    });
    const revenueByMonthRaw = await this.prisma.order.groupBy({
      by: ['createdAt'],
      _sum: { totalPrice: true },
      where: { paymentStatus: 'PAID', createdAt: { gte: months[0], lte: months[months.length - 1] } },
    });
    const revenueByMonth = months.map((m) => {
      const key = format(m, 'yyyy-MM');
      const sum = revenueByMonthRaw
        .filter((r) => format(r.createdAt, 'yyyy-MM') === key)
        .reduce((acc, r) => acc + (r._sum.totalPrice || 0), 0);
      return { month: format(m, 'MMM'), value: Number(sum.toFixed(2)) };
    });

    // عدد الطلبات لكل يوم من الأسبوع (للأعمدة الأسبوعية)
    const orders = await this.prisma.order.findMany({
      where: { createdAt: { gte: subDays(new Date(), 6) } },
      select: { createdAt: true },
    });
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const ordersByWeekday = days.map((d, idx) => ({
      day: d,
      value: orders.filter(o => new Date(o.createdAt).getDay() === idx).length,
    }));

    // الأقسام الأكثر طلبًا (Donut)
    const topCategoriesRaw = await this.prisma.orderItem.groupBy({
      by: ['productId'],
      _sum: { quantity: true },
      where: { order: { createdAt: { gte: from, lte: to } } },
    });

    // اجلب أسماء التصنيفات عبر المنتج -> الكاتيجوري
    const productIds = topCategoriesRaw.map(r => r.productId);
    const products = await this.prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, category: { select: { id: true, name: true } } },
    });
    const catMap = new Map<number,string>();
    products.forEach(p => { if (p.category) catMap.set(p.category.id, p.category.name); });

    // نجمع بالكategory name
    const accCat: Record<string, number> = {};
    for (const r of topCategoriesRaw) {
      const prod = products.find(p => p.id === r.productId);
      const name = prod?.category?.name || 'أخرى';
      accCat[name] = (accCat[name] || 0) + (r._sum.quantity || 0);
    }
    const categories = Object.entries(accCat)
      .map(([name, count]) => ({ name, value: count }))
      .sort((a,b) => b.value - a.value);

    return {
      kpis: {
        ordersCount,
        customersCount,
        totalRevenue: Number((totalRevenue._sum.totalPrice || 0).toFixed(2)),
      },
      charts: {
        revenueByMonth,
        ordersByWeekday,
        categories,
      },
      range,
    };
  }

 /**
   * الأكثر مبيعًا مع فلترة اختيارية بالتاريخ
   * @param from ISO string/date | undefined
   * @param to   ISO string/date | undefined
   * @param limit number = 10
   */
 async bestSellers(params?: { from?: Date | string; to?: Date | string; limit?: number }) {
    const from = params?.from ? new Date(params.from) : undefined;
    const to = params?.to ? new Date(params.to) : undefined;
    const limit = Math.max(1, Math.min(params?.limit ?? 10, 100)); // سقف 100

    // نبني أجزاء WHERE باراميترية، بدون string concat
    const whereParts: string[] = [`o.status = 'DELIVERED'`];
    const args: any[] = [];

    if (from) {
      whereParts.push(`o.createdAt >= ?`);
      args.push(from);
    }
    if (to) {
      whereParts.push(`o.createdAt <= ?`);
      args.push(to);
    }

    const whereSql = whereParts.length ? `WHERE ${whereParts.join(' AND ')}` : '';

    const sql = `
      SELECT
        oi.productId                    AS productId,
        p.name                          AS name,
        COALESCE(SUM(oi.quantity), 0)   AS qty,
        COALESCE(SUM(oi.unitPrice * oi.quantity), 0) AS revenue,
        p.imageUrl                      AS imageUrl
      FROM OrderItem oi
      JOIN \`Order\` o   ON o.id = oi.orderId
      JOIN Product  p   ON p.id = oi.productId
      ${whereSql}
      GROUP BY oi.productId
      ORDER BY qty DESC, revenue DESC
      LIMIT ?
    `;

    try {
      const rows = await this.prisma.$queryRaw<BestSellersDto[]>(sql as any, ...args, limit);
      // (اختياري) معالجة imageUrl بالـ MEDIA_BASE_URL
      const base = process.env.MEDIA_BASE_URL ?? '';
      return rows.map(r => ({
        ...r,
        imageUrl: r.imageUrl ? base + r.imageUrl : null,
      }));
    } catch (e) {
      // لو حصل Error (سواء P2010/P1017 أو غيره) نوفّر Fallback باستخدام Prisma API
      try {
        const where: any = { order: { status: 'DELIVERED' as const } };
        if (from || to) {
          where.order.createdAt = {};
          if (from) where.order.createdAt.gte = from;
          if (to)   where.order.createdAt.lte = to;
        }

        // هنجمع بالـ JS: ده أبطأ من الـ SQL في الداتا الكبيرة، لكنه آمن كـ خطة B
        const items = await this.prisma.orderItem.findMany({
          where,
          select: { productId: true, quantity: true, unitPrice: true, product: { select: { name: true, imageUrl: true } } },
        });

        const agg = new Map<number, { name: string; qty: number; revenue: number; imageUrl: string | null }>();
        for (const it of items) {
          const prev = agg.get(it.productId) ?? { name: it.product?.name ?? `#${it.productId}`, qty: 0, revenue: 0, imageUrl: it.product?.imageUrl ?? null };
          prev.qty += it.quantity;
          prev.revenue += it.unitPrice * it.quantity;
          if (prev.imageUrl == null && it.product?.imageUrl) prev.imageUrl = it.product.imageUrl;
          agg.set(it.productId, prev);
        }

        const base = process.env.MEDIA_BASE_URL ?? '';
        const out = [...agg.entries()]
          .map(([productId, v]) => ({ productId, name: v.name, qty: v.qty, revenue: v.revenue, imageUrl: v.imageUrl ? base + v.imageUrl : null }))
          .sort((a, b) => (b.qty - a.qty) || (b.revenue - a.revenue))
          .slice(0, limit);

        return out;
      } catch (fallbackErr) {   
        throw new InternalServerErrorException('Failed to compute best sellers');
      }
    }
  }
}
