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
import { AddressModule } from './address/address.module';
import { PaymobController } from './paymob/paymob.controller';
import { PaymobModule } from './paymob/paymob.module';
import { ConfigModule } from '@nestjs/config';
import { FavoritesModule } from './favorites/favorites.module';
import { ReviewsModule } from './reviews/reviews.module';
import { NotificationsModule } from './notification/notification.module';
import { NotificationsController } from './notification/notifications.controller';
import { NotificationsService } from './notification/notifications.service';
import { StatsModule } from './statics/stats.module';
import { ServeStaticModule, serveStaticProviders } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CommonModule,
    PrismaModule,
    NotificationsModule,
    AuthModule,
    UserModule,
    CategoryModule,
    ProductModule,
    CartModule,
    OrderModule,
    AddressModule,
    PaymobModule,
    FavoritesModule,
    ReviewsModule,
    StatsModule,
    ConfigModule.forRoot({
      isGlobal: true, // 👈 يخليها متاحة في كل المشروع
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'), // path to React build
    }),
  ],
  controllers: [AppController, NotificationsController, PaymobController],
  providers: [AppService, ImageService],
})
export class AppModule {}
