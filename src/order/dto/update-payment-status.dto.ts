import { IsEnum } from 'class-validator';
import { PaymentStatus } from '../../../generated/prisma';

export class UpdatePaymentStatusDto {
  @IsEnum(PaymentStatus)
  status: PaymentStatus;
}
