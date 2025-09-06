import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { StatsService } from './stats.service';
import { BestSellersDto } from './dto/best-sellers.dto';

@Controller('admin/stats')
export class StatsController {
  constructor(private stats: StatsService) {}

  @Get()
  getStats(@Query('range') range: 'weekly' | 'monthly' | 'yearly' = 'monthly') {
    return this.stats.getDashboard(range);
  }

  @Get('best-sellers')
  bestSellers(@Query(new ValidationPipe({ transform: true })) q: BestSellersDto) {
    return this.stats.bestSellers(q);
  }
}
