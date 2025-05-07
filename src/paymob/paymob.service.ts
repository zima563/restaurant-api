import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PaymobService {
  private authToken: string | null = null;
  private tokenExpiry: number | null = null;

  private readonly baseUrl = 'https://accept.paymob.com/api';

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  verifyHmac(body: any): boolean {
    const hmacSecret = this.config.get('PAYMOB_HMAC_SECRET');

    const obj = body.obj;

    const fields = [
      obj.amount_cents,
      obj.created_at,
      obj.currency,
      obj.error_occured,
      obj.has_parent_transaction,
      obj.id,
      obj.integration_id,
      obj.is_3d_secure,
      obj.is_auth,
      obj.is_capture,
      obj.is_refunded,
      obj.is_standalone_payment,
      obj.is_voided,
      obj.order?.id,
      obj.owner,
      obj.pending,
      obj.source_data?.pan,
      obj.source_data?.sub_type,
      obj.source_data?.type,
      obj.success,
    ];

    const concatenated = fields.map((v) => v ?? '').join('');

    const generatedHmac = crypto
      .createHmac('sha512', hmacSecret!)
      .update(concatenated)
      .digest('hex');

    console.log('🔍 Concatenated:', concatenated);
    console.log('🔐 Generated HMAC:', generatedHmac);
    console.log('📦 Paymob HMAC:', body.hmac);

    return generatedHmac === body.hmac;
  }

  async updateOrderPaymentStatus(orderId: number, success: boolean) {
    await this.prisma.order.update({
      where: { id: orderId },
      data: {
        paymentStatus: success ? 'PAID' : 'UNPAID',
      },
    });
  }

  // ✅ Get or cache token
  async authenticate(): Promise<string> {
    if (this.authToken && Date.now() < (this.tokenExpiry ?? 0)) {
      return this.authToken;
    }

    try {
      const { data } = await firstValueFrom(
        this.http.post(`${this.baseUrl}/auth/tokens`, {
          api_key: this.config.get('PAYMOB_API_KEY'),
        }),
      );

      this.authToken = data.token;
      this.tokenExpiry = Date.now() + 60 * 60 * 1000;

      return this.authToken!;
    } catch (error) {
      console.error(
        '❌ Paymob Token Error:',
        error?.response?.data || error.message,
      );
      throw new InternalServerErrorException(
        'Failed to authenticate with Paymob',
      );
    }
  }

  // ✅ Create order in Paymob
  async createOrder(
    token: string,
    amount: number,
    merchantOrderId: number,
  ): Promise<number> {
    try {
      const { data } = await firstValueFrom(
        this.http.post(`${this.baseUrl}/ecommerce/orders`, {
          auth_token: token,
          delivery_needed: false,
          amount_cents: amount,
          currency: 'EGP',
          items: [],
          merchant_order_id: merchantOrderId,
        }),
      );

      return data.id;
    } catch (error) {
      console.error(
        '❌ Paymob Create Order Error:',
        error?.response?.data || error.message,
      );
      throw new InternalServerErrorException(
        'Failed to create order with Paymob',
      );
    }
  }

  // ✅ Generate payment key
  async generatePaymentKey(
    token: string,
    amount: number,
    orderId: number,
    billingData: Record<string, any>,
  ): Promise<string> {
    try {
      const integrationId = this.config.get('PAYMOB_INTEGRATION_ID');

      const { data } = await firstValueFrom(
        this.http.post(`${this.baseUrl}/acceptance/payment_keys`, {
          auth_token: token,
          amount_cents: amount,
          expiration: 3600,
          order_id: orderId,
          billing_data: {
            ...billingData,
            floor: billingData.floor || '1',
            apartment: billingData.apartment || '1',
            state: billingData.state || 'Cairo',
            country: 'EG',
            postal_code: '12345',
            shipping_method: 'PKG',
            building: billingData.building || '1',
            street: billingData.street || 'Unknown',
            city: billingData.city || 'Cairo',
          },
          currency: 'EGP',
          integration_id: Number(integrationId),
        }),
      );

      return data.token;
    } catch (error) {
      console.error(
        '❌ Paymob Payment Key Error:',
        error?.response?.data || error.message,
      );
      throw new InternalServerErrorException('Failed to generate payment key');
    }
  }

  // ✅ Get Iframe URL
  getPaymentIframeUrl(paymentKey: string): string {
    const iframeId = this.config.get('PAYMOB_IFRAME_ID');
    return `https://accept.paymob.com/api/acceptance/iframes/${iframeId}?payment_token=${paymentKey}`;
  }
}
