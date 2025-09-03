import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateDeliveryInstructionsDto {
  @IsNotEmpty({ message: 'أدخل تعليمات التسليم' })
  @IsString()
  @MaxLength(500, { message: 'لا تتجاوز 500 حرفاً' })
  instructions: string;
}
