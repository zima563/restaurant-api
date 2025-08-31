// auth/password-otp.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RequestOtpDto } from './dto/request-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { signStageToken, verifyStageToken } from './token.util';
import { MailService } from './common/mail/mail.service';

const OTP_TTL_MS = 10 * 60 * 1000; // 10 دقائق
const OTP_MAX_ATTEMPTS = 5;

@Injectable()
export class PasswordOtpService {
  constructor(private prisma: PrismaService, private mail: MailService) {}

  private sha256(s: string) {
    return crypto.createHash('sha256').update(s).digest('hex');
  }

  private genOtp() {
    return (Math.floor(Math.random() * 1_000_000)).toString().padStart(6, '0');
  }

  async requestOtp(dto: RequestOtpDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    // إرجاع رسالة عامة حتى لو الإيميل غير موجود
    if (!user) return { message: 'If that email exists, an OTP has been sent.' };

    const otp = this.genOtp();
    const otpRec = await this.prisma.passwordOtp.create({
      data: {
        userId: user.id,
        codeHash: this.sha256(otp),
        expiresAt: new Date(Date.now() + OTP_TTL_MS),
      },
    });

    await this.mail.sendOtp(user.email, otp);

    // Stage1 token (للاستدعاء التالي)
    const token = signStageToken({
      sub: user.id,
      scope: 'pw:otp',
      otpId: otpRec.id,
      jti: crypto.randomUUID(),
      ttlSec: Math.floor(OTP_TTL_MS / 1000),
    });

    return { message: 'If that email exists, an OTP has been sent.', token };
  }

  async verifyOtp(authHeader: string | undefined, dto: VerifyOtpDto) {
    const token = this.extractBearer(authHeader);
    let decoded: any;
    try {
      decoded = verifyStageToken(token, 'pw:otp');
    } catch {
      throw new BadRequestException('Invalid or expired session.');
    }

    const otpRec = await this.prisma.passwordOtp.findUnique({ where: { id: decoded.otpId } });
    if (!otpRec || otpRec.userId !== decoded.sub)
      throw new BadRequestException('Invalid session.');
    if (otpRec.usedAt) throw new BadRequestException('OTP already used.');
    if (otpRec.expiresAt < new Date()) throw new BadRequestException('OTP expired.');
    if (otpRec.attempts >= OTP_MAX_ATTEMPTS) throw new BadRequestException('Too many attempts.');

    const ok = this.sha256(dto.otp) === otpRec.codeHash;
    if (!ok) {
      await this.prisma.passwordOtp.update({ where: { id: otpRec.id }, data: { attempts: { increment: 1 } } });
      throw new BadRequestException('Invalid OTP.');
    }

    // علّم الـ OTP مستخدم
    await this.prisma.passwordOtp.update({ where: { id: otpRec.id }, data: { usedAt: new Date() } });

    // Stage2 token (لإعادة التعيين)
    const stage2 = signStageToken({
      sub: decoded.sub,
      scope: 'pw:reset',
      jti: crypto.randomUUID(),
      ttlSec: 15 * 60, // 15 دقيقة
    });

    return { message: 'OTP verified.', token: stage2 };
  }

  async resetPassword(authHeader: string | undefined, dto: ResetPasswordDto) {
    const token = this.extractBearer(authHeader);
    let decoded: any;
    try {
      decoded = verifyStageToken(token, 'pw:reset');
    } catch {
      throw new BadRequestException('Invalid or expired session.');
    }

    const hashed = await bcrypt.hash(dto.newPassword, 12);

    await this.prisma.user.update({
      where: { id: decoded.sub },
      data: { password: hashed},
    });

    return { message: 'Password updated successfully.' };
  }

  private extractBearer(h?: string) {
    if (!h) throw new BadRequestException('Missing Authorization header.');
    const [type, token] = h.split(' ');
    if (type !== 'Bearer' || !token) throw new BadRequestException('Invalid Authorization header.');
    return token;
  }
}
