import { IsNotEmpty, Matches } from 'class-validator';
export class VerifyOtpDto {
  @IsNotEmpty()
  @Matches(/^\d{6}$/, { message: 'OTP must be 6 digits' })
  otp: string;
}