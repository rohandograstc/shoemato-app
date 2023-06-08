function createData(mId, mName, mPlace, totalStock, details) {
  return {
    mId,
    mName,
    mPlace,
    totalStock,
    details,
  };
}

export const rows = [
  createData("#876364", "abhishek", "$178", "325", "10000"),
  createData("#876364", "Product Name", "$178", "325", "10000"),
];
export const tableHead = [
  "Manufacturer ID",
  "Name",
  "Place",
  "Stock",
  "Details",
];
