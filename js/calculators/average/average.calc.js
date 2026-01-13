function calculateAverage(rows) {
  let totalQty = 0;
  let totalAmount = 0;

  rows.forEach(row => {
    const qty = Number(row.qty) || 0;
    const price = Number(row.price) || 0;

    totalQty += qty;
    totalAmount += qty * price;
  });

  return {
    totalQty,
    averagePrice: totalQty ? (totalAmount / totalQty) : 0
  };
}
