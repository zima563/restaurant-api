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
    const { sizes, addons, ...rest } = dto;
    const category = await this.prisma.category.findUnique({
      where: { id: Number(rest.categoryId) },
    });
    if (!category) throw new NotFoundException('Category not found');
    return this.prisma.product.create({
      data: {
        ...rest,
        imageUrl,
        price: Number(rest.price),
        categoryId: Number(rest.categoryId),
        sizes: sizes ? { create: sizes } : undefined,
        addons: addons ? { create: addons } : undefined,
      },
      include: { sizes: true, addons: true },
    });
  }
  async findAll(query: any) {
    const { where, orderBy, take, skip } = buildProductQueryFilters(query);

    const [products] = await Promise.all([
      this.prisma.product.findMany({
        where,
        orderBy,
        include: { category: true },
        ...(take ? { take, skip } : {}), // لو مفيش limit ما تبعتش take/skip نهائيًا
      }),
      this.prisma.product.count({ where }),
    ]);

    products.forEach((p) => {
      if (p.imageUrl) p.imageUrl = process.env.MEDIA_BASE_URL + p.imageUrl;
    });

    return products;
  }
  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        sizes: true,
        addons: true,
      },
    });
    if (!product) throw new NotFoundException('Product not found');
    if (product.imageUrl) {
      product.imageUrl = process.env.MEDIA_BASE_URL + product.imageUrl;
    }
    return product;
  }

  async update(id: number, dto: UpdateProductDto, newImageUrl?: string) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    const category = await this.prisma.category.findUnique({
      where: { id: dto.categoryId },
    });

    if (dto.categoryId && !category) {
      throw new NotFoundException('Category not found');
    }
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
