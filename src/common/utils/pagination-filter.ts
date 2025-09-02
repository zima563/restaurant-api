export function buildProductQueryFilters(query: any) {
  const { categoryId, foodType } = query;
  const where: any = {};

  if (categoryId) where.categoryId = +categoryId;
  if (foodType) where.foodType = foodType;

  const orderBy = { createdAt: 'desc' as const };

  // لو عايز كل الداتا افتراضيًا: خليه من غير take/skip
  // ولو المستخدم بعت page/limit: طبّقهم
  const page = Number(query.page);
  const limit = Number(query.limit);

  if (page && limit) {
    const take = Math.max(1, Math.min(100, limit)); // سقف 100 مثلًا
    const skip = (Math.max(1, page) - 1) * take;
    return { where, orderBy, take, skip };
  }

  // بدون pagination
  return { where, orderBy };
}
