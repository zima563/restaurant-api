import { Module } from '@nestjs/common';
import { PaymobService } from './paymob.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PaymobController } from './paymob.controller';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [PaymobService],
  controllers: [PaymobController],
  exports: [PaymobService],
})
export class PaymobModule {}
