import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  // helpers لتوقيع التوكنات
  private signAccessToken(payload: any) {
    const expiresIn = Number(process.env.JWT_ACCESS_TTL || 900); // 15m by default (seconds)
    return this.jwt.sign(payload, {
      secret: process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET, // fallback لو عندك secret واحد
      expiresIn,
    });
  }

  private signRefreshToken(payload: any) {
    const expiresIn = Number(process.env.JWT_REFRESH_TTL || 60 * 60 * 24 * 7); // 7d (seconds)
    return this.jwt.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      expiresIn,
    });
  }

  async register(dto: RegisterDto) {
    // فحص وجود البريد أو الهاتف
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: dto.email },
          ...(dto.phone ? [{ phone: dto.phone }] : []),
        ],
      },
    });
    if (existingUser) {
      throw new UnauthorizedException('Email or phone already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
        phone: dto.phone,
      },
    });

    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.signAccessToken(payload);
    const refreshToken = this.signRefreshToken({ sub: user.id });

    // (اختياري) خزن الـ RT زي ما هو أو هاّشه. هنا بنخزّنه نصيًا زي كودك السابق.
    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    const { password, ...userWithoutPass } = user;
    return { accessToken, refreshToken, user: userWithoutPass };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.signAccessToken(payload);
    const refreshToken = this.signRefreshToken({ sub: user.id });

    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken },
    });

    const { password, ...userWithoutPass } = user;
    return { accessToken, refreshToken, user: userWithoutPass };
  }

  async rotateRefreshToken(oldRefreshToken: string) {
    try {
      const decoded: any = this.jwt.verify(oldRefreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: { id: decoded.sub },
      });
      if (
        !user ||
        !user.refreshToken ||
        user.refreshToken !== oldRefreshToken
      ) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const payload = { sub: user.id, email: user.email, role: user.role };
      const newAccess = this.signAccessToken(payload);
      const newRefresh = this.signRefreshToken({ sub: user.id });

      await this.prisma.user.update({
        where: { id: user.id },
        data: { refreshToken: newRefresh },
      });

      return { accessToken: newAccess, refreshToken: newRefresh };
    } catch (error) {
      if (
        error.name === 'JsonWebTokenError' ||
        error.name === 'TokenExpiredError' ||
        error.name === 'NotBeforeError'
      ) {
        throw new UnauthorizedException('Invalid refresh token');
      }
      // Log unexpected errors for debugging
      console.error('Unexpected error in rotateRefreshToken:', error);
      throw error;
    }
  }

  async logoutByRefresh(oldRefreshToken: string | undefined) {
    if (!oldRefreshToken) return;
    try {
      const decoded: any = this.jwt.verify(oldRefreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      });
      await this.prisma.user.update({
        where: { id: decoded.sub },
        data: { refreshToken: null },
      });
    } catch {
      // تجاهل أي أخطاء verify أثناء اللوج آوت
    }
  }
}
