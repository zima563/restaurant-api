import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ImageService } from './common/image/image.service';
import { CommonModule } from './common/common.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { NotificationService } from './notification/notification.service';
import { NotificationController } from './notification/notification.controller';
import { AddressModule } from './address/address.module';
import { PaymobController } from './paymob/paymob.controller';
import { PaymobModule } from './paymob/paymob.module';
import { NotificationModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CommonModule,
    PrismaModule,
    AuthModule,
    UserModule,
    CategoryModule,
    ProductModule,
    CartModule,
    OrderModule,
    AddressModule,
    PaymobModule,
    NotificationModule,
    ConfigModule.forRoot({
      isGlobal: true, // 👈 يخليها متاحة في كل المشروع
    }),
  ],
  controllers: [AppController, NotificationController, PaymobController],
  providers: [AppService, ImageService, NotificationService],
})
export class AppModule {}
