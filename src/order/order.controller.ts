import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  Patch,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UpdateOrderStatusDto } from './dto/update-status.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment-status.dto';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  createOrder(@Request() req, @Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(req.user.userId, dto);
  }

  @Get()
  getOrders(@Request() req) {
    return this.orderService.getOrders(req.user.userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateOrderStatusDto) {
    return this.orderService.updateOrderStatus(+id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/timeline')
  async getOrderTimeline(@Request() req, @Param('id') id: string) {
    const timeline = await this.orderService.getTimeline(+id, req.user.userId);

    if (!timeline)
      throw new NotFoundException('Order not found or access denied');

    return timeline;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('admin/all')
  getAllOrdersForAdmin(@Query() query: any) {
    return this.orderService.getAllOrdersForAdmin(query);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id/payment-status')
  updatePaymentStatus(
    @Param('id') id: string,
    @Body() dto: UpdatePaymentStatusDto,
  ) {
    return this.orderService.updatePaymentStatus(+id, dto.status);
  }
}
