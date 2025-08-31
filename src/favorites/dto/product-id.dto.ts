import { IsInt, Min } from 'class-validator';

export class ProductIdDto {
  @IsInt()
  @Min(1)
  productId: number;
}
