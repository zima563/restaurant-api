import {
  Controller,
  Get,
  Patch,
  Body,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('me')
  getMe(@Request() req) {
    return this.userService.getMe(req.user.userId);
  }

  @Patch('me')
  updateMe(@Request() req, @Body() dto: UpdateUserDto) {
    return this.userService.updateMe(req.user.userId, dto);
  }

  @Patch('me/password')
  changePassword(@Request() req, @Body() dto: ChangePasswordDto) {
    return this.userService.changePassword(req.user.userId, dto);
  }

  @Delete('me')
  deleteAccount(@Request() req) {
    return this.userService.deleteAccount(req.user.userId);
  }
}
