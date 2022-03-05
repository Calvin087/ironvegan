const calculatePagination = (page, count, limit, max) => {
  return {
    slotOne: Number(page) === 1 ? 1 : Number(page),
    slotTwo: count >= limit ? Number(page) + 1 : undefined,
    slotThree:
      count >= limit && Number(page) + 1 < max ? Number(page) + 2 : undefined,
    // totalPages: Math.ceil(count / limit),
    pageCount: { page, max },
    previous: Number(page) > 1 ? Number(page) - 1 : undefined,
    next: count < limit ? undefined : Number(page) + 1,
  };
};

module.exports = { calculatePagination };
