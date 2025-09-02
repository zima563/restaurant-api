// src/notifications/notifications.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

function parseCookies(cookieHeader?: string): Record<string, string> {
  if (!cookieHeader) return {};
  const out: Record<string, string> = {};
  cookieHeader.split(';').forEach((c) => {
    const [k, ...rest] = c.trim().split('=');
    out[k] = decodeURIComponent(rest.join('=') || '');
  });
  return out;
}

@WebSocketGateway({
  namespace: '/notifications',
  cors: { origin: ['http://localhost:3000'], credentials: true },
})
export class NotificationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  private async sendQueue(
    client: Socket,
    userId: number,
    page = 1,
    limit = 10,
  ) {
    const [items, total] = await this.prisma.$transaction([
      this.prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.notification.count({ where: { userId } }),
    ]);

    client.emit('notifications:queue', {
      items,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  }

  // ===== Auth on connect + send first page =====
  async handleConnection(client: Socket) {
    const cookies = parseCookies(client.handshake.headers.cookie as string);
    const token =
      cookies['access_token'] || (client.handshake as any).auth?.token;
    if (!token) return client.disconnect();

    try {
      const payload: any = this.jwt.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET,
      });
      const userId = Number(payload.sub ?? payload.userId);
      if (!userId) throw new Error('no-sub');

      (client.data as any).userId = userId;
      client.join(`user:${userId}`);

      await this.sendQueue(client, userId, 1, 10);

      // عدّاد غير المقروء
      const unread = await this.prisma.notification.count({
        where: { userId, isRead: false },
      });
      client.emit('notifications:unread_count', { count: unread });
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(_client: Socket) {}

  // ===== Pagination over WS =====
  @SubscribeMessage('notifications:list')
  async onList(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: { page?: number; limit?: number },
  ) {
    const userId = (client.data as any).userId as number;
    if (!userId) return;

    const page = Math.max(1, Number(body?.page || 1));
    const limit = Math.max(1, Math.min(50, Number(body?.limit || 10)));

    await this.sendQueue(client, userId, page, limit);
  }

  // ===== Mark single read =====
  @SubscribeMessage('notifications:mark_read')
  async onMarkRead(
    @ConnectedSocket() client: Socket,
    @MessageBody() body: { id: number },
  ) {
    const userId = (client.data as any).userId as number;
    if (!userId || !body?.id) return;

    await this.prisma.notification.updateMany({
      where: { id: body.id, userId, isRead: false },
      data: { isRead: true },
    });

    // ردّ فوري بالكاش المحلي
    client.emit('notifications:marked', { ids: [body.id] });

    // عدّاد غير المقروء
    const unread = await this.prisma.notification.count({
      where: { userId, isRead: false },
    });
    this.server
      .to(`user:${userId}`)
      .emit('notifications:unread_count', { count: unread });
  }

  // ===== Mark all read =====
  @SubscribeMessage('notifications:mark_all')
  async onMarkAll(@ConnectedSocket() client: Socket) {
    const userId = (client.data as any).userId as number;
    if (!userId) return;

    await this.prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });

    client.emit('notifications:marked_all', { ok: true });
    this.server
      .to(`user:${userId}`)
      .emit('notifications:unread_count', { count: 0 });
  }

  // ===== Push helper (تستدعيها الخدمات الأخرى) =====
  emitToUser(userId: number, event: string, data: any) {
    this.server.to(`user:${userId}`).emit(event, data);
  }

  async push(userId: number, title: string, body: string) {
    const notif = await this.prisma.notification.create({
      data: { userId, title, body, isRead: false },
    });
    this.emitToUser(userId, 'notifications:new', notif);

    const unread = await this.prisma.notification.count({
      where: { userId, isRead: false },
    });
    this.emitToUser(userId, 'notifications:unread_count', { count: unread });

    return notif;
  }
}
