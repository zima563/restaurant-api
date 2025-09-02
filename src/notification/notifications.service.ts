import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsGateway } from './notifications.gateway';

@Injectable()
export class NotificationsService {
  constructor(
    private prisma: PrismaService,
    private gateway: NotificationsGateway,
  ) {}

  async push(userId: number, title: string, body: string) {
    const notif = await this.prisma.notification.create({
      data: { userId, title, body },
    });

    this.gateway.emitToUser(userId, 'notifications:new', notif);

    const unread = await this.prisma.notification.count({
      where: { userId, isRead: false },
    });
    this.gateway.emitToUser(userId, 'notifications:unread_count', {
      count: unread,
    });

    return notif;
  }

  async list(userId: number, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [items, total] = await this.prisma.$transaction([
      this.prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      this.prisma.notification.count({ where: { userId } }),
    ]);
    return { page, limit, total, items };
  }

  async markRead(userId: number, id: number) {
    const n = await this.prisma.notification.findUnique({ where: { id } });
    if (!n) throw new NotFoundException('Notification not found');
    if (n.userId !== userId) throw new ForbiddenException();

    await this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });

    const unread = await this.prisma.notification.count({
      where: { userId, isRead: false },
    });
    this.gateway.emitToUser(userId, 'notifications:unread_count', {
      count: unread,
    });

    return { ok: true };
  }
}
