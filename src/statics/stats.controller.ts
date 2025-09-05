import { Controller, Get, Query } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('admin/stats')
export class StatsController {
  constructor(private stats: StatsService) {}

  @Get()
  getStats(@Query('range') range: 'weekly' | 'monthly' | 'yearly' = 'monthly') {
    return this.stats.getDashboard(range);
  }
}
