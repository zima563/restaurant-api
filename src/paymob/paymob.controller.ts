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

@Controller('paymob')
export class PaymobController {
  constructor(private paymobService: PaymobService) {}

  @Get('callback')
  @HttpCode(200)
  async handleCallback(@Query() query: any) {
    const isValid = this.paymobService.verifyHmac(query);

    if (!isValid) {
      throw new BadRequestException('Invalid HMAC signature');
    }
    const success = query.success === 'true';

    await this.paymobService.updateOrderPaymentStatus(
      query.merchant_order_id,
      success,
    );

    return { message: 'Callback received' };
  }
}
