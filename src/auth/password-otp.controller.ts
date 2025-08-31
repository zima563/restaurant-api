// auth/password-otp.controller.ts
import { Body, Controller, Headers, Post } from '@nestjs/common';
import { PasswordOtpService } from './password-otp.service';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Controller('auth/forgot-password')
export class PasswordOtpController {
  constructor(private readonly service: PasswordOtpService) {}

  @Post('otp-request')
  requestOtp(@Body() dto: RequestOtpDto) {
    return this.service.requestOtp(dto);
  }

  @Post('otp-verify')
  verify(@Headers('authorization') auth: string, @Body() dto: VerifyOtpDto) {
    return this.service.verifyOtp(auth, dto);
  }

  @Post('reset')
  reset(@Headers('authorization') auth: string, @Body() dto: ResetPasswordDto) {
    return this.service.resetPassword(auth, dto);
  }
}
