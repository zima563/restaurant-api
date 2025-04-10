import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ImageService } from 'src/common/image/image.service';
import { buildProductQueryFilters } from 'src/common/utils/pagination-filter';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private imageService: ImageService,
  ) {}

  async create(dto: CreateProductDto, imageUrl?: string) {
    const category = await this.prisma.category.findUnique({
      where: { id: dto.categoryId },
    });
    if (!category) throw new NotFoundException('Category not found');
    return this.prisma.product.create({
      data: {
        ...dto,
        imageUrl,
      },
    });
  }

  async findAll(query: any) {
    const { where, take, skip, orderBy, page, limit } =
      buildProductQueryFilters(query);

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        take,
        skip,
        orderBy,
        include: { category: true },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      data: products,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: number, dto: UpdateProductDto, newImageUrl?: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    if (newImageUrl && product.imageUrl) {
      this.imageService.deleteImage(product.imageUrl);
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        ...dto,
        imageUrl: newImageUrl ?? product.imageUrl,
      },
    });
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    if (product.imageUrl) {
      this.imageService.deleteImage(product.imageUrl);
    }

    return this.prisma.product.delete({ where: { id } });
  }
}
