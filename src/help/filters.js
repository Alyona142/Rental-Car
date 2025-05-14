export const getFilters = ({
  page,
  limit,
  brand,
  price,
  mileageFrom,
  mileageTo,
}) => {
  const filters = { page, limit };

  if (brand) filters.make = brand; // бренд
  if (price) filters.rentalPrice = price; // ціна оренди
  if (mileageFrom) filters.mileageFrom = mileageFrom; // пробіг від
  if (mileageTo) filters.mileageTo = mileageTo; // пробіг до

  return filters;
};
