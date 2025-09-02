import { Module } from '@nestjs/common';
import { PaymobService } from './paymob.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaymobController } from './paymob.controller';
import { NotificationsModule } from 'src/notification/notification.module';

@Module({
  imports: [PrismaModule, NotificationsModule, HttpModule],
  providers: [PaymobService],
  controllers: [PaymobController],
  exports: [PaymobService],
})
export class PaymobModule {}
