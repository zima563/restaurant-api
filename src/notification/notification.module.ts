import { Module } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { WsJwtGuard } from './ws-jwt.guard';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET,
    }),
  ],
  providers: [NotificationsGateway, NotificationsService, WsJwtGuard],
  controllers: [NotificationsController],
  exports: [NotificationsService], // <-- نصدّر الـ Service فقط
})
export class NotificationsModule {}
