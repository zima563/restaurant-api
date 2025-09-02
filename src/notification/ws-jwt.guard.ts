// src/notifications/ws-jwt.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';

function parseCookies(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) return {};
  const out: Record<string, string> = {};
  cookieHeader.split(';').forEach((c) => {
    const [k, ...rest] = c.trim().split('=');
    out[k] = decodeURIComponent(rest.join('=') || '');
  });
  return out;
}

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(private jwt: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client = context.switchToWs().getClient<Socket>();
    const cookies = parseCookies(client.handshake.headers.cookie as string);

    // WS يعتمد على access_token (مش rt)
    const token =
      cookies['access_token'] ||
      (client.handshake as any).auth?.token ||
      undefined;

    if (!token) throw new WsException('Unauthorized');

    try {
      const payload: any = this.jwt.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET,
      });
      console.log('WS payload=', payload);
      // 👈 هنا التعديل الحقيقي: استخدم sub
      const userId = Number(payload.sub);
      if (!userId) throw new WsException('Unauthorized');

      (client.data as any).userId = userId;
      (client.data as any).email = payload.email;

      // Debug مفيد لو حابب:
      // console.log('WS payload=', payload);

      return true;
    } catch {
      throw new WsException('Unauthorized');
    }
  }
}
