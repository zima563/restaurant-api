export function buildProductQueryFilters(query: any) {
  const { categoryId, foodType, page = 1, limit = 10, ...other } = query;
  const where: any = {};

  if (categoryId) where.categoryId = +categoryId;
  if (foodType) where.foodType = foodType;

  const take = +limit;
  const skip = (+page - 1) * take;
  const orderBy = { createdAt: 'desc' as const };

  return { where, take, skip, orderBy, page: +page, limit: +limit };
}
