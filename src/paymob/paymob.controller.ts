import {
  Controller,
  Post,
  Req,
  HttpCode,
  BadRequestException,
  Query,
  Get,
} from '@nestjs/common';
import { PaymobService } from './paymob.service';
import { NotificationsService } from 'src/notification/notifications.service';

@Controller('paymob')
export class PaymobController {
  constructor(
    private paymobService: PaymobService,
    private notificationService: NotificationsService,
  ) {}

  private async notify(userId: number, title: string, body: string) {
    this.notificationService.push(userId, title, body).catch(() => {});
  }

  @Get('callback')
  @HttpCode(200)
  async handleCallback(@Query() query: any) {
    const isValid = this.paymobService.verifyHmac(query);

    if (!isValid) {
      let order = await this.paymobService.getOrderByMerchantId(
        query.merchant_order_id,
      );
      if (order) {
        const cartItems = await this.paymobService.getCartItems(order.id);
        const itemsDescription = cartItems
          .map((item) => `${item.quantity} x ${item.product.name}`)
          .join(', ');
        const grandTotal = order.totalPrice;
        await this.notify(
          order.userId,
          'Payment Failed',
          `Your payment for order #${order.id} failed. Items: ${itemsDescription}. Total: ${grandTotal.toFixed(2)} EGP`,
        );
      }
      throw new BadRequestException('Invalid HMAC signature');
    }
    const success = query.success === 'true';

    if (success) {
      let order = await this.paymobService.getOrderByMerchantId(
        query.merchant_order_id,
      );
      if (order) {
        const cartItems = await this.paymobService.getCartItems(order.id);
        const itemsDescription = cartItems
          .map((item) => `${item.quantity} x ${item.product.name}`)
          .join(', ');
        const grandTotal = order.totalPrice;
        await this.notify(
          order.userId,
          'Payment Successful',
          `Your payment for order #${order.id} was successful! Items: ${itemsDescription}. Total: ${grandTotal.toFixed(2)} EGP`,
        );
      }
    }

    await this.paymobService.updateOrderPaymentStatus(
      query.merchant_order_id,
      success,
    );

    return { message: 'Callback received' };
  }
}
