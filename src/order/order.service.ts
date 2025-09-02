// src/order/order.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-status.dto';
import { PaymentStatus } from 'generated/prisma';
import { PaymobService } from 'src/paymob/paymob.service';
import { NotificationsService } from 'src/notification/notifications.service';

@Injectable()
export class OrderService {
  private readonly SHIPPING_COST = 30;

  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationsService,
    private paymobService: PaymobService,
  ) {}

  /** Fire-and-forget notification to avoid blocking the request */
  private async notify(userId: number, title: string, body: string) {
    this.notificationService.push(userId, title, body).catch(() => {});
  }

  async createOrder(userId: number, dto: CreateOrderDto) {
    // 1) Fetch cart with details
    const cartItems = await this.prisma.cartItem.findMany({
      where: { userId },
      include: {
        product: true,
        size: true,
        addons: { include: { addon: true } },
      },
    });
    if (!cartItems || cartItems.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    // 2) Resolve address (provided or default)
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
      const def = await this.prisma.address.findFirst({
        where: { userId, isDefault: true },
      });
      if (!def) throw new BadRequestException('No address found');
      selectedAddressId = def.id;
    }

    // 3) Build order items (unitPrice = size + addons)
    const orderItemsData = cartItems.map((item) => {
      const sizePrice = item.size ? item.size.price : 0;
      const addonsTotal = item.addons.reduce(
        (sum, ai) => sum + ai.addon.price,
        0,
      );
      const unitPrice = sizePrice + addonsTotal;
      return {
        productId: item.productId,
        sizeId: item.sizeId,
        quantity: item.quantity,
        unitPrice,
        addons: {
          create: item.addons.map((ai) => ({ addonId: ai.addonId })),
        },
      };
    });

    // 4) Totals
    const productTotal = orderItemsData.reduce(
      (sum, it) => sum + it.unitPrice * it.quantity,
      0,
    );
    const shipping = cartItems.length > 0 ? this.SHIPPING_COST : 0;
    const grandTotal = productTotal + shipping;

    // 5) Create order
    const order = await this.prisma.order.create({
      data: {
        userId,
        addressId: selectedAddressId,
        paymentMethod: dto.paymentMethod,
        totalPrice: grandTotal,
        orderItems: { create: orderItemsData },
      },
      include: {
        orderItems: {
          include: {
            product: true,
            size: true,
            addons: { include: { addon: true } },
          },
        },
        address: true,
      },
    });

    // 6) Clear cart
    await this.prisma.cartItemAddon.deleteMany({
      where: { cartItemId: { in: cartItems.map((i) => i.id) } },
    });
    await this.prisma.cartItem.deleteMany({ where: { userId } });

    // 🔔 Notify: order placed
    await this.notify(
      userId,
      'Order placed',
      `Your order #${order.id} has been placed. Total: ${grandTotal.toFixed(2)} EGP`,
    );

    return order;
  }

  async getOrders(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: { orderItems: true, address: true },
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
      data: { status: dto.status },
    });

    // 🔔 Notify: status updated
    await this.notify(
      order.userId,
      'Order update',
      `Your order #${order.id} status changed to ${dto.status}`,
    );

    // timeline log
    await this.prisma.orderStatusLog.create({
      data: {
        orderId,
        status: dto.status,
        note: `Status changed to ${dto.status}`,
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
        orderItems: { include: { product: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updatePaymentStatus(orderId: number, status: PaymentStatus) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) throw new NotFoundException('Order not found');

    const updated = await this.prisma.order.update({
      where: { id: orderId },
      data: { paymentStatus: status },
    });

    // 🔔 Notify: payment status updated
    const friendly =
      status === 'PAID'
        ? 'Payment received'
        : status === 'FAILED'
          ? 'Payment failed'
          : status === 'REFUNDED'
            ? 'Payment refunded'
            : 'Payment status updated';

    await this.notify(
      order.userId,
      friendly,
      `Order #${order.id}: ${friendly}.`,
    );

    return updated;
  }

  async getOrdersByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        orderItems: {
          include: {
            product: true,
            size: true,
            addons: { include: { addon: true } },
          },
        },
        address: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async pay(orderId: number, userId: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: { user: true, address: true },
    });

    if (!order || order.userId !== userId) {
      throw new ForbiddenException('Not allowed to pay for this order');
    }
    if (order.paymentStatus === 'PAID') {
      throw new BadRequestException('Order has already been paid');
    }

    // 1) Paymob authenticate
    const token = await this.paymobService.authenticate();

    // 2) Create Paymob order
    const merchantOrderId = `order-${orderId}-${Date.now()}`;
    const paymobOrderId = await this.paymobService.createOrder(
      token,
      order.totalPrice * 100, // paymob uses cents
      merchantOrderId,
    );

    // 3) Persist IDs
    await this.prisma.order.update({
      where: { id: order.id },
      data: { paymobOrderId, merchantOrderId },
    });

    // 4) Billing data
    const billingData = {
      first_name: order.user.name,
      last_name: 'Customer',
      email: order.user.email,
      phone_number: order.user.phone,
      building: order.address.building || '1',
      floor: order.address.floor || '1',
      apartment: order.address.apartment || '1',
      street: order.address.street || 'Default Street',
      city: order.address.city || 'Cairo',
      state: 'Cairo',
      country: 'EG',
    };

    // 5) Payment key + iframe URL
    const paymentKey = await this.paymobService.generatePaymentKey(
      token,
      order.totalPrice * 100,
      paymobOrderId,
      billingData,
    );
    const iframeUrl = this.paymobService.getPaymentIframeUrl(paymentKey);

    // 🔔 Notify: payment initiated
    await this.notify(
      userId,
      'Payment initiated',
      `Payment started for order #${order.id}. Complete your payment to confirm.`,
    );

    return { iframeUrl };
  }
}
