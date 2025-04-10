import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CartService } from 'src/cart/cart.service';
import { UpdateOrderStatusDto } from './dto/update-status.dto';
import { NotificationService } from 'src/notification/notification.service';
import { PaymentStatus } from 'generated/prisma';
import { PaymobService } from 'src/paymob/paymob.service';

@Injectable()
export class OrderService {
  private readonly SHIPPING_COST = 30;

  constructor(
    private prisma: PrismaService,
    private cartService: CartService,
    private notificationService: NotificationService,
    private paymobService: PaymobService,
  ) {}

  async createOrder(userId: number, dto: CreateOrderDto) {
    const cartItems = await this.prisma.cartItem.findMany({
      where: { userId },
      include: { product: true },
    });

    if (!cartItems || cartItems.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    let selectedAddressId: number;

    if (dto.addressId) {
      const address = await this.prisma.address.findUnique({
        where: { id: dto.addressId },
      });

      if (!address || address.userId !== userId) {
        throw new BadRequestException('Invalid address');
      }

      selectedAddressId = address.id;
    } else {
      const defaultAddress = await this.prisma.address.findFirst({
        where: {
          userId,
          isDefault: true,
        },
      });

      if (!defaultAddress) {
        throw new BadRequestException('No address found');
      }

      selectedAddressId = defaultAddress.id;
    }

    const productTotal = cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);

    const shipping = cartItems.length > 0 ? this.SHIPPING_COST : 0;
    const grandTotal = productTotal + shipping;

    const orderItemsData = cartItems.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      unitPrice: item.product.price,
    }));

    const order = await this.prisma.order.create({
      data: {
        userId,
        addressId: selectedAddressId,
        paymentMethod: dto.paymentMethod,
        totalPrice: grandTotal,
        orderItems: {
          create: orderItemsData,
        },
      },
      include: {
        orderItems: true,
        address: true,
      },
    });

    await this.prisma.cartItem.deleteMany({
      where: { userId },
    });

    return order;
  }

  async getOrders(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        orderItems: true,
        address: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateOrderStatus(orderId: number, dto: UpdateOrderStatusDto) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) throw new NotFoundException('Order not found');

    const updated = await this.prisma.order.update({
      where: { id: orderId },
      data: {
        status: dto.status,
      },
    });
    await this.notificationService.create(
      order.userId,
      'Order Update',
      `Your order #${order.id} status changed to ${dto.status}`,
    );

    await this.prisma.orderStatusLog.create({
      data: {
        orderId,
        status: dto.status,
        note: `Status changed to ${dto.status}`, // ممكن تبقى optional
      },
    });

    return updated;
  }

  async getTimeline(orderId: number, userId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: { userId: true },
    });

    if (!order || order.userId !== userId) return null;

    return this.prisma.orderStatusLog.findMany({
      where: { orderId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async getAllOrdersForAdmin(query: any) {
    return this.prisma.order.findMany({
      include: {
        user: true,
        address: true,
        orderItems: {
          include: { product: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updatePaymentStatus(orderId: number, status: PaymentStatus) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) throw new NotFoundException('Order not found');

    return this.prisma.order.update({
      where: { id: orderId },
      data: { paymentStatus: status },
    });
  }

  async pay(orderId: number, userId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: { address: true, user: true },
    });

    if (!order || order.userId !== userId) {
      throw new ForbiddenException('Not allowed to pay for this order');
    }

    const token = await this.paymobService.authenticate();
    const paymobOrderId = await this.paymobService.createOrder(
      token,
      order.totalPrice * 100,
      order.id,
    );

    const billingData = {
      apartment: order.address.apartment,
      email: order.user.email,
      floor: order.address.floor,
      first_name: order.user.name,
      last_name: 'Customer',
      phone_number: order.user.phone,
      street: order.address.street,
      building: order.address.building,
      city: order.address.city,
      country: 'EG',
      state: 'Cairo',
    };

    const paymentKey = await this.paymobService.generatePaymentKey(
      token,
      order.totalPrice * 100,
      paymobOrderId,
      billingData,
    );
    const iframeUrl = this.paymobService.getPaymentIframeUrl(paymentKey);

    return { iframeUrl };
  }
}
