import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { join } from 'path';
import * as fs from 'fs';
import { ImageService } from 'src/common/image/image.service';

@Injectable()
export class CategoryService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImageService,
  ) {}

  async create(dto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: dto.name,
        imageUrl: dto.imageUrl,
      },
    });
  }

  async findAll() {
    return this.prisma.category.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');

    if (dto.imageUrl && category.imageUrl) {
      this.imageService.deleteImage(category.imageUrl);
    }

    return this.prisma.category.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');

    if (category.imageUrl) {
      this.imageService.deleteImage(category.imageUrl);
    }
    return this.prisma.category.delete({ where: { id } });
  }
}
