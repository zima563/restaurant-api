import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty() @IsString() city: string;
  @IsNotEmpty() @IsString() street: string;
  @IsNotEmpty() @IsString() building: string;
  @IsNotEmpty() @IsString() floor: string;
  @IsNotEmpty() @IsString() apartment: string;
  @IsOptional() @IsString() note?: string;
  @IsOptional() @IsBoolean() isDefault?: boolean;
}
