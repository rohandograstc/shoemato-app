function createData(pName, price, totalOrder, totalAmount, profit, commision) {
  return {
    pName,
    price,
    totalOrder,
    totalAmount,
    profit,
    commision,
  };
}

export const rows = [
  createData("#876364", "Product Name", "$178", "325", "X", "10000"),
  createData("#876364", "Product Name", "$178", "325", "X", "10000"),
];
export const tableHead = [
  "Product Name",
  "Price",
  "Total Order",
  "Total Amount",
  "Profit",
  "Commission",
];
