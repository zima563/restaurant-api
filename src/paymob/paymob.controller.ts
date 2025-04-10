import {
  Controller,
  Post,
  Body,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import * as crypto from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('paymob')
export class PaymobController {
  constructor(private prisma: PrismaService) {}

  @Post('callback')
  async handleCallback(@Body() body: any, @Headers('hmac') hmac: string) {
    const secret = process.env.PAYMOB_HMAC_SECRET!;

    // 1. جمع الحقول المطلوبة بنفس ترتيب Paymob
    const fields = [
      'amount_cents',
      'created_at',
      'currency',
      'error_occured',
      'has_parent_transaction',
      'id',
      'integration_id',
      'is_3d_secure',
      'is_auth',
      'is_capture',
      'is_refunded',
      'is_standalone_payment',
      'is_voided',
      'order',
      'owner',
      'pending',
      'source_data_pan',
      'source_data_sub_type',
      'source_data_type',
      'success',
    ];

    const concatenated = fields.map((f) => body[f] ?? '').join('');
    const computedHmac = crypto
      .createHmac('sha512', secret)
      .update(concatenated)
      .digest('hex');

    if (computedHmac !== hmac) {
      throw new BadRequestException('Invalid HMAC');
    }

    // 2. تحديث الطلب حسب نجاح الدفع
    const merchantOrderId = body.order?.merchant_order_id;

    const isSuccess = body.success === true || body.success === 'true';

    await this.prisma.order.update({
      where: { id: merchantOrderId },
      data: {
        paymentStatus: isSuccess ? 'PAID' : 'FAILED',
      },
    });

    return { message: 'Webhook processed' };
  }
}
