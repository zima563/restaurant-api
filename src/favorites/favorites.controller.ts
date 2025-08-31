import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ProductIdDto } from './dto/product-id.dto';
import { JwtAuthGuard } from '../auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly service: FavoritesService) {}

  @Post()
  add(@Req() req: any, @Body() dto: ProductIdDto) {
    return this.service.add(req.user.userId, dto.productId);
  }

  @Delete(':productId')
  remove(@Req() req: any, @Param('productId', ParseIntPipe) productId: number) {
    return this.service.remove(req.user.userId, productId);
  }

  @Post('toggle')
  toggle(@Req() req: any, @Body() dto: ProductIdDto) {
    return this.service.toggle(req.user.userId, dto.productId);
  }

  @Get()
  list(
    @Req() req: any,
    @Query('page') page = '1',
    @Query('limit') limit = '12',
    @Query('q') q?: string,
  ) {
    return this.service.list(req.user.userId, Number(page), Number(limit), q);
  }

  @Get('count/me')
  count(@Req() req: any) {
    return this.service.countForUser(req.user.userId);
  }

  @Get(':productId')
  isFav(@Req() req: any, @Param('productId', ParseIntPipe) productId: number) {
    return this.service.isFavorite(req.user.userId, productId);
  }
}
