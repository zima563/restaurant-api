import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateAddressDto {
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() street?: string;
  @IsOptional() @IsString() building?: string;
  @IsOptional() @IsString() floor?: string;
  @IsOptional() @IsString() apartment?: string;
  @IsOptional() @IsString() note?: string;
  @IsOptional() @IsBoolean() isDefault?: boolean;
}
