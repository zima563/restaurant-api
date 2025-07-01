import { IsNumber, Min, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCartDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  quantity?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  sizeId?: number;

  @IsOptional()
  @IsArray()
  @Type(() => Number)
  addonIds?: number[];
}
