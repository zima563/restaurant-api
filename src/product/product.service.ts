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
        include: { category: true,
        sizes: true },
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
    // ✅ 1. تأكيد وجود المنتج
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
  
    // ✅ 2. تأكيد الكاتيجوري لو موجودة
    if (dto.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: dto.categoryId },
      });
      if (!category) throw new NotFoundException('Category not found');
    }
  
    // ✅ 3. حذف الصورة القديمة لو فيه جديدة
    if (newImageUrl && product.imageUrl) {
      this.imageService.deleteImage(product.imageUrl);
    }
  
    const { sizes, addons, categoryId, ...productData } = dto;
  
    // ✅ 4. تحديث البيانات الأساسية للمنتج
    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: {
        ...productData,
        imageUrl: newImageUrl ?? product.imageUrl,
        // ✅ تعديل العلاقة مع الكاتيجوري بالطريقة الصحيحة في Prisma
        ...(categoryId && {
          category: {
            connect: { id: Number(categoryId) },
          },
        }),
      },
    });
  
    // ✅ 5. تحديث الأحجام (sizes)
    if (dto.sizes) {
      await this.prisma.productSize.deleteMany({ where: { productId: id } });
      await this.prisma.productSize.createMany({
        data: dto.sizes.map((s) => ({
          productId: id,
          name: s.name,
          price: s.price,
        })),
      });
    }
  
    // ✅ 6. تحديث الإضافات (addons)
    if (dto.addons) {
      for (const a of dto.addons) {
        await this.prisma.productAddon.upsert({
          where: { id: (a as any).id ?? 0 }, // لو موجود حدثه، لو مش موجود أنشئه
          update: { name: a.name, price: a.price },
          create: { productId: id, name: a.name, price: a.price },
        });
      }
    }
    
  
    // ✅ 7. إرجاع المنتج بعد التحديث
    return this.prisma.product.findUnique({
      where: { id },
      include: {
        sizes: true,
        addons: true,
        category: true,
      },
    });
  }
  
  

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');

    if (product.imageUrl) {
      this.imageService.deleteImage(product.imageUrl);
    }

    // 🧹 امسح الـ علاقات المرتبطة
  await this.prisma.$transaction([
    this.prisma.productSize.deleteMany({ where: { productId: id } }),
    this.prisma.productAddon.deleteMany({ where: { productId: id } }),
    this.prisma.cartItem.deleteMany({ where: { productId: id } }),
    this.prisma.orderItem.deleteMany({ where: { productId: id } }),
    this.prisma.favorite.deleteMany({ where: { productId: id } }),
    this.prisma.review.deleteMany({ where: { productId: id } }),
  ]);

    return this.prisma.product.delete({ where: { id } });
  }
}
