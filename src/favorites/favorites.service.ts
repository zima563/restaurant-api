// src/favorites/favorites.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async add(userId: number, productId: number) {
    // تأكيد المنتج موجود (مفيد لرسالة خطأ واضحة)
    const prod = await this.prisma.product.findUnique({
      where: { id: productId },
      select: { id: true },
    });
    if (!prod) throw new NotFoundException('Product not found');

    // unique(userId, productId) تمنع التكرار تلقائيًا
    await this.prisma.favorite.upsert({
      where: { userId_productId: { userId, productId } },
      update: {}, // لو موجود: لا تعمل شيء
      create: { userId, productId }, // لو مش موجود: أنشئ
    });
    return { ok: true, favored: true };
  }

  async remove(userId: number, productId: number) {
    const fav = await this.prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
      select: { id: true },
    });
    if (!fav) return { ok: true, favored: false };
    await this.prisma.favorite.delete({ where: { id: fav.id } });
    return { ok: true, favored: false };
  }

  async toggle(userId: number, productId: number) {
    const exists = await this.prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
      select: { id: true },
    });
    if (exists) {
      await this.prisma.favorite.delete({ where: { id: exists.id } });
      return { ok: true, favored: false };
    }
    await this.add(userId, productId);
    return { ok: true, favored: true };
  }

  async list(userId: number,  q?: string) {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.favorite.findMany({
        where: {
          userId,
          ...(q && {
            product: {
              OR: [{ name: { contains: q } }, { description: { contains: q } }],
            },
          }),
        },
        orderBy: { createdAt: 'desc' },
      
        select: {
          createdAt: true,
          product: {
            select: {
              id: true,
              name: true,
              description: true,
              price: true,
              imageUrl: true,
              isAvailable: true,
              categoryId: true,
              foodType: true,
              sizes: true,
              _count: { select: { favoritedBy: true } },
            },
          },
        },
      }),
      this.prisma.favorite.count({
        where: {
          userId,
          ...(q && {
            product: {
              OR: [{ name: { contains: q } }, { description: { contains: q } }],
            },
          }),
        },
      }),
    ]);

    let products = items.map((x) => ({
      ...x.product,
      isFavorite: true,
      favoritesCount: x.product._count.favoritedBy,
    }));

    return products;
  }

  async isFavorite(userId: number, productId: number) {
    const fav = await this.prisma.favorite.findUnique({
      where: { userId_productId: { userId, productId } },
      select: { id: true },
    });
    return { isFavorite: !!fav };
  }

  async countForUser(userId: number) {
    const total = await this.prisma.favorite.count({ where: { userId } });
    return { total };
  }
}
