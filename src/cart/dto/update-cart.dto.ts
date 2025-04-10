import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCartDto {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  quantity: number;
}
