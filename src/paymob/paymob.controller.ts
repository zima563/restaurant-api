import {
  Controller,
  Post,
  Body,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { PaymobService } from './paymob.service';

@Controller('paymob')
export class PaymobController {
  constructor(private paymobService: PaymobService) {}

  @Post('callback')
  @HttpCode(200)
  async handleCallback(@Body() body: any) {
    const isValid = this.paymobService.verifyHmac(body); // 👈 ابعت body مش obj
    console.log('🔍 isValid:', isValid);
    console.log('📦 Full Callback body:', body);

    if (!isValid) {
      throw new BadRequestException('Invalid HMAC signature');
    }

    const orderId = body.obj.order?.merchant_order_id ?? body.obj.order?.id;
    const success = body.obj.success;

    await this.paymobService.updateOrderPaymentStatus(Number(orderId), success);

    return { message: 'Callback received' };
  }
}
