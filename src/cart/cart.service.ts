import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async getCart(userId: number) {
    const items = await this.prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: true,
        size: true,
        addons: { include: { addon: true } },
      },
    });
    items.forEach((item) => {
      if (item.product.imageUrl) {
        item.product.imageUrl =
          process.env.MEDIA_BASE_URL + item.product.imageUrl;
      }
    });

    const itemsCount = items.length;

    // حساب السعر النهائي لكل عنصر
    const itemsWithTotals = items.map((item) => {
      const sizePrice = item.size ? item.size.price : 0;
      const addonsTotal = item.addons.reduce(
        (sum, ai) => sum + ai.addon.price,
        0,
      );
      const itemTotal = (sizePrice + addonsTotal) * item.quantity;
      return {
        ...item,
        sizePrice,
        addonsTotal,
        itemTotal,
      };
    });

    const totalPrice = itemsWithTotals.reduce(
      (total, item) => total + item.itemTotal,
      0,
    );
    const shipping = itemsCount > 0 ? 30 : 0;
    const grandTotal = totalPrice + shipping;

    return {
      items: itemsWithTotals,
      itemsCount,
      totalPrice,
      shipping,
      grandTotal,
    };
  }

  async addToCart(userId: number, dto: AddToCartDto) {
    // ✅ تحقق إن المنتج موجود
    const product = await this.prisma.product.findUnique({
      where: { id: dto.productId },
    });
    if (!product) throw new NotFoundException('Product not found');

    // ✅ تحقق إن الحجم تابع للمنتج
    if (dto.sizeId) {
      const size = await this.prisma.productSize.findUnique({
        where: { id: dto.sizeId },
      });
      if (!size || size.productId !== dto.productId) {
        throw new BadRequestException('Invalid size');
      }
    }

    // ✅ تحقق إن الـ addons فعلاً تخص المنتج
    let addonsTotal = 0;
    let addonsData: { addonId: number }[] = [];
    if (dto.addonIds && dto.addonIds.length > 0) {
      const addons = await this.prisma.productAddon.findMany({
        where: { id: { in: dto.addonIds } },
      });
      const valid = addons.every((a) => a.productId === dto.productId);
      if (!valid) throw new BadRequestException('Invalid addon(s)');

      addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
      addonsData = addons.map((a) => ({ addonId: a.id }));
    }

    // ✅ أنشئ عنصر السلة + احفظ الـ addons في جدول الوسيط
    const cartItem = await this.prisma.cartItem.create({
      data: {
        userId,
        productId: dto.productId,
        sizeId: dto.sizeId,
        quantity: dto.quantity,
        addons: {
          create: addonsData, // بيربط cartItemAddon بالـ addonId مباشرة
        },
      },
      include: {
        size: true,
        product: true,
        addons: { include: { addon: true } },
      },
    });

    // ✅ حساب السعر الكلي
    const sizePrice = cartItem.size ? cartItem.size.price : 0;
    const itemTotal = (sizePrice + addonsTotal) * cartItem.quantity;

    return {
      ...cartItem,
      sizePrice,
      addonsTotal,
      itemTotal,
    };
  }

  async updateCartItem(userId: number, cartItemId: number, dto: UpdateCartDto) {
    const cartItem = await this.prisma.cartItem.findUnique({
      where: { id: cartItemId },
      include: { addons: true },
    });

    if (!cartItem || cartItem.userId !== userId) {
      throw new NotFoundException('Cart item not found');
    }

    if (dto.sizeId) {
      const size = await this.prisma.productSize.findUnique({
        where: { id: dto.sizeId },
      });
      if (!size || size.productId !== cartItem.productId)
        throw new BadRequestException('Invalid size');
    }

    if (dto.addonIds && dto.addonIds.length > 0) {
      const addons = await this.prisma.productAddon.findMany({
        where: { id: { in: dto.addonIds } },
      });
      const valid = addons.every(
        (addon) => addon.productId === cartItem.productId,
      );
      if (!valid) throw new BadRequestException('Invalid addon(s)');
    }

    if (dto.addonIds) {
      await this.prisma.cartItemAddon.deleteMany({ where: { cartItemId } });
      await this.prisma.cartItemAddon.createMany({
        data: dto.addonIds.map((addonId) => ({ cartItemId, addonId })),
      });
    }

    return this.prisma.cartItem.update({
      where: { id: cartItemId },
      data: {
        sizeId: dto.sizeId,
        quantity: dto.quantity ?? cartItem.quantity,
      },
      include: {
        product: true,
        size: true,
        addons: { include: { addon: true } },
      },
    });
  }

  async removeItem(userId: number, itemId: number) {
    const item = await this.prisma.cartItem.findUnique({
      where: { id: itemId },
    });

    if (!item || item.userId !== userId) {
      throw new NotFoundException('Cart item not found');
    }

    // امسح الإضافات المرتبطة (لو فيه)
    await this.prisma.cartItemAddon.deleteMany({
      where: { cartItemId: itemId },
    });

    return this.prisma.cartItem.delete({ where: { id: itemId } });
  }

  async clearCart(userId: number) {
    // امسح الإضافات المرتبطة بكل عنصر في السلة
    const items = await this.prisma.cartItem.findMany({
      where: { userId },
      select: { id: true },
    });
    for (const item of items) {
      await this.prisma.cartItemAddon.deleteMany({
        where: { cartItemId: item.id },
      });
      await this.prisma.cartItem.delete({ where: { id: item.id } });
    }
    return { message: 'Cart cleared' };
  }
}
