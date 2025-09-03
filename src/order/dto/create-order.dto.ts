import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '../../../generated/prisma';

export class CreateOrderDto {
  @Type(() => Number)
  @IsNumber()
  addressId?: number;

  @IsNotEmpty()
  @IsEnum(PaymentMethod, {
    message: 'paymentMethod must be one of CASH, CREDIT_CARD, WALLET',
  })
  paymentMethod: PaymentMethod;

  @IsOptional()
  @IsString()
  @MaxLength(500, { message: 'لا تتجاوز 500 حرفاً' })
  deliveryInstructions?: string;
}
