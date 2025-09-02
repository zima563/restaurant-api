export function buildProductQueryFilters(query: any) {
  const { categoryId, foodType, ...other } = query;
  const where: any = {};

  if (categoryId) where.categoryId = +categoryId;
  if (foodType) where.foodType = foodType;

  // const take = +limit;
  // const skip = (+page - 1) * take;
  const orderBy = { createdAt: 'desc' as const };

  return { where, orderBy };
}
