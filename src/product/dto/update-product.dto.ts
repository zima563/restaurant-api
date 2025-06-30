import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { FoodType } from './create-product.dto';
import { Type } from 'class-transformer';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  categoryId?: number;

  @IsEnum(FoodType)
  @IsOptional()
  foodType?: FoodType;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  price?: number;
}
