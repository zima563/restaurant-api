// src/common/mail/mail.service.ts
import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || 'false') === 'true';

    // ادعم التسميتين احتياطياً
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;

    // دي مفيدة للتأكد بسرعة (بتظهر SET/MISSING من غير كشف السر)
    // console.log({
    //   SMTP_HOST: host,
    //   SMTP_PORT: port,
    //   SMTP_SECURE: secure,
    //   SMTP_USER: user ? 'SET' : 'MISSING',
    //   SMTP_PASS: pass ? 'SET' : 'MISSING',
    // });

    if (!host || !user || !pass) {
      throw new InternalServerErrorException(
        'SMTP config missing. Set SMTP_HOST, SMTP_USER, SMTP_PASS (and SMTP_PORT/SMTP_SECURE).',
      );
    }

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure, // true عادةً للـ 465، false للـ 587 (STARTTLS)
      auth: { user, pass },
    });
  }

  async sendOtp(email: string, otp: string) {
    const from = process.env.MAIL_FROM || '"Support" <no-reply@example.com>';
    // تأكيد الاتصال (هتفيدك في كشف أي مشكلة إعداد)
    await this.transporter.verify();

    await this.transporter.sendMail({
      from,
      to: email,
      subject: 'Your password reset code',
      html: `<p>Your OTP code is:</p>
             <div style="font-size:22px;font-weight:700;letter-spacing:4px">${otp}</div>
             <p>This code expires in 10 minutes.</p>`,
    });
  }
}
