import { Injectable } from '@nestjs/common';
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

  async bestSellers(q: BestSellersDto) {
    const sort  = (q.sortBy ?? 'revenue') === 'qty' ? 'qty' : 'revenue';
    const order = (q.order ?? 'desc').toUpperCase(); // ASC | DESC

    // حدود التاريخ (افتراضي: آخر 30 يوم)
    const to   = q.to ? new Date(q.to) : new Date();
    const from = q.from ? new Date(q.from) : new Date(to.getTime() - 30*24*3600*1000);

    // نبني شروط إضافية للتصنيف لو مطلوبة
    // نستعمل $queryRaw عشان نجمع بفاعلية
    const whereCatJoin = q.categoryId ? 'JOIN `Product` p ON p.id = oi.productId AND p.categoryId = ?' : '';
    const paramsBase: any[] = q.categoryId ? [q.categoryId, from, to] : [from, to];

    // إجمالي الصفوف (للترقيم)
    const totalRows: Array<{ total: number }> = await this.prisma.$queryRawUnsafe(
      `
      SELECT COUNT(*) AS total FROM (
        SELECT oi.productId
        FROM \`OrderItem\` oi
        JOIN \`Order\` o ON o.id = oi.orderId
        ${whereCatJoin}
        WHERE o.paymentStatus = 'PAID'
          AND o.createdAt BETWEEN ? AND ?
        GROUP BY oi.productId
      ) t
      `,
      ...paramsBase
    );
    const total = Number(totalRows?.[0]?.total || 0);

    // البيانات المجمعة
    const rows: Array<{ productId: number; qty: number; revenue: number }> =
      await this.prisma.$queryRawUnsafe(
        `
        SELECT
          oi.productId,
          SUM(oi.quantity)                              AS qty,
          SUM(oi.quantity * oi.unitPrice)               AS revenue
        FROM \`OrderItem\` oi
        JOIN \`Order\` o ON o.id = oi.orderId
        ${whereCatJoin}
        WHERE o.paymentStatus = 'PAID'
          AND o.createdAt BETWEEN ? AND ?
        GROUP BY oi.productId
        ORDER BY ${sort} ${order}
        LIMIT ? OFFSET ?
        `,
        ...paramsBase,
      );

    const productIds = rows.map(r => r.productId);
    const products = productIds.length
      ? await this.prisma.product.findMany({
          where: { id: { in: productIds } },
          select: { id: true, name: true, imageUrl: true, category: { select: { id: true, name: true } } },
        })
      : [];

    const productMap = new Map(products.map(p => [p.id, p]));
    const items = rows.map(r => {
      const p = productMap.get(r.productId);
      return {
        productId: r.productId,
        name: p?.name ?? 'Unknown',
        imageUrl: p?.imageUrl ? process.env.MEDIA_BASE_URL + p.imageUrl : null,
        category: p?.category ?? null,
        qty: Number(r.qty || 0),
        revenue: Number((r.revenue || 0).toFixed(2)),
      };
    });

    return items;
  }
}
