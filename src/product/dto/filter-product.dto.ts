import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { FoodType } from './create-product.dto';
import { Type } from 'class-transformer';

export class FilterProductDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  categoryId?: number;

  @IsOptional()
  @IsEnum(FoodType)
  foodType?: FoodType;
}
