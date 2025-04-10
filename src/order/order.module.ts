import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CartModule } from 'src/cart/cart.module';
import { PaymobModule } from 'src/paymob/paymob.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [PrismaModule, CartModule, NotificationModule, PaymobModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
