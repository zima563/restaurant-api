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

  verifyHmac(query: Record<string, any>): boolean {
    const hmacSecret = process.env.PAYMOB_HMAC_SECRET;
    const keys = [
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
      'source_data.pan',
      'source_data.sub_type',
      'source_data.type',
      'success',
    ];
  
    const concatenated = keys
      .map((key) => query[key] ?? '')
      .join('');
  
    const generatedHmac = crypto
      .createHmac('sha512', hmacSecret!)
      .update(concatenated)
      .digest('hex');
  
    console.log('🔍 Concatenated:', concatenated);
    console.log('🔐 Generated HMAC:', generatedHmac);
    console.log('📦 Paymob HMAC:', query.hmac);
  
    return generatedHmac === query.hmac;
  }
  
  

  async updateOrderPaymentStatus(merchantOrderId: string, success: boolean) {
    await this.prisma.order.update({
      where: { merchantOrderId },
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
    merchantOrderId: string,
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
