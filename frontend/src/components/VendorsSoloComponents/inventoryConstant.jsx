function createData(pId, category, price, stock) {
  return {
    pId,
    category,
    price,
    stock,
  };
}

export const inventoryRows = [
  createData("#876364", "abc", "1000", "50"),
  createData("#876364", "abc", "1000", "50"),
  createData("#876364", "abc", "1000", "50"),
];
export const inventoryTableHead = ["Product ID", "Category", "Price", "Stock"];
