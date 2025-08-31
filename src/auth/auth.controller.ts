import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  private setRefreshCookie(res: Response, token: string) {
    res.cookie('rt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // خليها true في HTTPS
      sameSite: 'strict',
      maxAge: Number(process.env.JWT_REFRESH_TTL || 60 * 60 * 24 * 7) * 1000,
      path: '/', // غيّرها لو عايز تقيد المسار
    });
  }

  @Post('register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, user } =
      await this.authService.register(dto);
    this.setRefreshCookie(res, refreshToken);
    return { accessToken, user };
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken, user } =
      await this.authService.login(dto);
    this.setRefreshCookie(res, refreshToken);
    return { accessToken, user };
  }

  @Post('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const rt = req.cookies?.rt;
    if (!rt) throw new UnauthorizedException('Missing refresh cookie');

    const { accessToken, refreshToken } =
      await this.authService.rotateRefreshToken(rt);
    this.setRefreshCookie(res, refreshToken);
    return { accessToken };
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const rt = req.cookies?.rt;
    await this.authService.logoutByRefresh(rt);
    res.clearCookie('rt', { path: '/' });
    return { message: 'Logged out' };
  }
}
