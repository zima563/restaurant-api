import { IsEnum, IsInt, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FoodType } from './create-product.dto';

class SizeDto {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  price: number;
}

class AddonDto {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  price: number;
}

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

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SizeDto)
  sizes?: SizeDto[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AddonDto)
  addons?: AddonDto[];
}
