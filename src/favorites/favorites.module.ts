import { Module } from '@nestjs/common';
import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificationsService } from 'src/notification/notifications.service';
import { NotificationsModule } from 'src/notification/notification.module';

@Module({
  imports: [PrismaModule, NotificationsModule],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
