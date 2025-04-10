import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as crypto from 'crypto';

@Injectable()
export class PaymobService {
  private readonly apiKey = process.env.PAYMOB_API_KEY!;
  private readonly integrationId = process.env.PAYMOB_INTEGRATION_ID!;
  private readonly iframeId = process.env.PAYMOB_IFRAME_ID!;
  private readonly baseUrl = 'https://accept.paymob.com/api';
  private readonly hmacSecret = process.env.PAYMOB_HMAC_SECRET!;

  constructor(private http: HttpService) {}

  async authenticate(): Promise<string> {
    const res = await firstValueFrom(
      this.http.post(`${this.baseUrl}/auth/tokens`, {
        api_key: this.apiKey,
      }),
    );
    return res.data.token;
  }

  async createOrder(token: string, amountCents: number, orderId: number) {
    const res = await firstValueFrom(
      this.http.post(`${this.baseUrl}/ecommerce/orders`, {
        auth_token: token,
        delivery_needed: false,
        amount_cents: amountCents,
        currency: 'EGP',
        items: [],
        merchant_order_id: orderId,
      }),
    );
    return res.data.id;
  }

  async generatePaymentKey(
    token: string,
    amountCents: number,
    orderId: number,
    billingData: any,
  ) {
    const res = await firstValueFrom(
      this.http.post(`${this.baseUrl}/acceptance/payment_keys`, {
        auth_token: token,
        amount_cents: amountCents,
        expiration: 3600,
        order_id: orderId,
        billing_data: billingData,
        currency: 'EGP',
        integration_id: Number(this.integrationId),
      }),
    );
    return res.data.token;
  }

  getPaymentIframeUrl(paymentToken: string) {
    return `https://accept.paymob.com/api/acceptance/iframes/${this.iframeId}?payment_token=${paymentToken}`;
  }

  validateHmac(data: any, receivedHmac: string): boolean {
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
      'source_data_pan',
      'source_data_sub_type',
      'source_data_type',
      'success',
    ];

    const concatenated = keys.map((key) => data[key]).join('');
    const generatedHmac = crypto
      .createHmac('sha512', this.hmacSecret)
      .update(concatenated)
      .digest('hex');

    return generatedHmac === receivedHmac;
  }
}
