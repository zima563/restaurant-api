// src/stats/dto/best-sellers.dto.ts
import { IsDateString, IsEnum, IsInt, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class BestSellersDto {
  @IsOptional() @IsDateString()
  from?: string;                 // ISO date e.g. 2025-09-01

  @IsOptional() @IsDateString()
  to?: string;                   // ISO date

  @IsOptional() @Type(() => Number) @IsInt()
  categoryId?: number;

  @IsOptional() @IsEnum(['qty','revenue'])
  sortBy?: 'qty' | 'revenue' = 'revenue';

  @IsOptional() @IsEnum(['asc','desc'])
  order?: 'asc' | 'desc' = 'desc';

  @IsOptional() @Type(() => Number) @IsPositive()
  page?: number = 1;

  @IsOptional() @Type(() => Number) @IsPositive()
  limit?: number = 10;
    imageUrl: any;
}
