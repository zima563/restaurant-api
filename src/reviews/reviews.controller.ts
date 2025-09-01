import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly service: ReviewsService) {}

  private getUserId(req: any) {
    const uid = Number(req?.user?.userId ?? req?.user?.userId);
    if (!uid) throw new UnauthorizedException('Invalid auth payload');
    return uid;
  }

  // إنشاء/تحديث مراجعة لنفس المنتج (upsert)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() dto: CreateReviewDto) {
    return this.service.create(this.getUserId(req), dto);
  }

  // تعديل مراجعة بالـ id (لازم تبقى بتاعت نفس المستخدم)
  @UseGuards(JwtAuthGuard)
  @Put(':reviewId')
  update(
    @Req() req: any,
    @Param('reviewId', ParseIntPipe) reviewId: number,
    @Body() dto: UpdateReviewDto,
  ) {
    return this.service.update(this.getUserId(req), reviewId, dto);
  }

  // حذف مراجعة
  @UseGuards(JwtAuthGuard)
  @Delete(':reviewId')
  remove(@Req() req: any, @Param('reviewId', ParseIntPipe) reviewId: number) {
    return this.service.remove(this.getUserId(req), reviewId);
  }

  // قائمة مراجعات المنتج (عام)
  @Get('product/:productId')
  listForProduct(
    @Param('productId', ParseIntPipe) productId: number,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    return this.service.listForProduct(productId, Number(page), Number(limit));
  }

  // مراجعة المستخدم الحالي على منتج
  @UseGuards(JwtAuthGuard)
  @Get('product/:productId/me')
  myReview(
    @Req() req: any,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.service.myReviewForProduct(this.getUserId(req), productId);
  }

  // ملخص سريع (عدد + متوسط) من الحقول المخزنة
  @Get('product/:productId/summary')
  summary(@Param('productId', ParseIntPipe) productId: number) {
    return this.service.productSummary(productId);
  }
}
