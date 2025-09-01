import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  /** إعادة حساب متوسط/عدد التقييمات وتخزينهم في Product */
  private async recomputeProductRating(productId: number) {
    const { _avg, _count } = await this.prisma.review.aggregate({
      where: { productId },
      _avg: { rating: true },
      _count: { rating: true },
    });

    await this.prisma.product.update({
      where: { id: productId },
      data: {
        ratingAverage: Number(_avg.rating ?? 0),
        ratingCount: _count.rating,
      },
    });
  }

  private ensureIds(userId?: number, productId?: number) {
    if (!userId || !Number.isFinite(userId))
      throw new BadRequestException('userId is required.');
    if (!productId || !Number.isFinite(productId))
      throw new BadRequestException('productId is required.');
  }

  /** إنشاء/تحديث مراجعة لنفس المستخدم على نفس المنتج (upsert) */
  async create(
    userId: number,
    dto: { productId: number; rating: number; comment?: string },
  ) {
    this.ensureIds(userId, dto.productId);

    const prod = await this.prisma.product.findUnique({
      where: { id: dto.productId },
      select: { id: true },
    });
    if (!prod) throw new NotFoundException('Product not found');

    const review = await this.prisma.review.upsert({
      where: { userId_productId: { userId, productId: dto.productId } }, // يتطلب @@unique([userId, productId])
      update: { rating: dto.rating, comment: dto.comment },
      create: {
        userId,
        productId: dto.productId,
        rating: dto.rating,
        comment: dto.comment,
      },
    });

    await this.recomputeProductRating(dto.productId);
    return review;
  }

  async update(
    userId: number,
    reviewId: number,
    dto: { rating?: number; comment?: string },
  ) {
    const rev = await this.prisma.review.findUnique({
      where: { id: reviewId },
    });
    if (!rev) throw new NotFoundException('Review not found');
    if (rev.userId !== userId) throw new ForbiddenException('Not your review');

    const updated = await this.prisma.review.update({
      where: { id: reviewId },
      data: {
        rating: dto.rating ?? rev.rating,
        comment: dto.comment ?? rev.comment,
      },
    });

    await this.recomputeProductRating(rev.productId);
    return updated;
  }

  async remove(userId: number, reviewId: number) {
    const rev = await this.prisma.review.findUnique({
      where: { id: reviewId },
    });
    if (!rev) throw new NotFoundException('Review not found');
    if (rev.userId !== userId) throw new ForbiddenException('Not your review');

    await this.prisma.review.delete({ where: { id: reviewId } });
    await this.recomputeProductRating(rev.productId);
    return { ok: true };
  }

  /** قائمة مراجعات منتج مع pagination */
  async listForProduct(productId: number, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.review.findMany({
        where: { productId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          updatedAt: true,
          user: { select: { id: true, email: true, name: true } },
        },
      }),
      this.prisma.review.count({ where: { productId } }),
    ]);

    return { page, limit, total, items };
  }

  /** مراجعة المستخدم الحالي على منتج */
  async myReviewForProduct(userId: number, productId: number) {
    const r = await this.prisma.review.findUnique({
      where: { userId_productId: { userId, productId } },
    });
    return r ?? null;
  }

  /** ملخص سريع للمنتج (من الأعمدة المخزّنة) */
  async productSummary(productId: number) {
    const p = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { id: true, ratingAverage: true, ratingCount: true },
    });
    if (!p) throw new NotFoundException('Product not found');
    return p;
  }
}
