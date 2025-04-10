import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from '../../../generated/prisma';

export class UpdateOrderStatusDto {
  @IsNotEmpty()
  @IsEnum(OrderStatus, {
    message:
      'Status must be one of PENDING, PREPARING, ON_THE_WAY, DELIVERED, CANCELLED',
  })
  status: OrderStatus;
}
