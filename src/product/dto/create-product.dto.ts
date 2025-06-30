import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export enum FoodType {
  GRILLED = 'GRILLED',
  DESSERTS = 'DESSERTS',
  JUICES = 'JUICES',
  PASTA = 'PASTA',
  SEAFOOD = 'SEAFOOD',
  OTHERS = 'OTHERS',
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Type(() => Number)
  categoryId: number;

  @IsEnum(FoodType)
  foodType: FoodType;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  price: number;

  @IsString()
  @IsOptional()
  sizes?: { name: string; price: number }[];

  @IsString()
  @IsOptional()
  addons?: { name: string; price: number }[];
}
