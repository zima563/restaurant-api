import { Prisma } from '../../../generated/prisma';

export function buildProductQueryFilters(query: any) {
  // 📦 Pagination
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const skip = (page - 1) * limit;

  // 🔎 Filtering
  const filters: any = {};

  if (query.search) {
    filters.name = {
      contains: query.search,
      mode: 'insensitive', // ✅ تجاهل الحروف الكبيرة والصغيرة
    };
  }

  if (query.categoryId) {
    filters.categoryId = Number(query.categoryId);
  }

  if (query.minPrice || query.maxPrice) {
    filters.price = {};
    if (query.minPrice) filters.price.gte = Number(query.minPrice);
    if (query.maxPrice) filters.price.lte = Number(query.maxPrice);
  }

  // 🔃 Sorting
  const validSortFields = ['createdAt', 'price', 'name'];
  const sortBy = validSortFields.includes(query.sortBy)
    ? query.sortBy
    : 'createdAt';

  const sortOrder =
    query.sortOrder === 'asc' ? Prisma.SortOrder.asc : Prisma.SortOrder.desc;

  return {
    where: filters,
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder,
    },
    page,
    limit,
  };
}
