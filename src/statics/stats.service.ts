import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { subDays, startOfDay, endOfDay, startOfMonth, endOfMonth, subMonths, eachMonthOfInterval, format } from 'date-fns';

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
}
