import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtStrategy } from './jwt.strategy';
import { PasswordOtpController } from './password-otp.controller';
import { PasswordOtpService } from './password-otp.service';
import { MailModule } from './common/mail/mail.module';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret',
      signOptions: { expiresIn: '7d' },
    }),
    MailModule, 
  ],
  providers: [AuthService, JwtStrategy, PasswordOtpService],
  controllers: [AuthController, PasswordOtpController],
})
export class AuthModule {}
