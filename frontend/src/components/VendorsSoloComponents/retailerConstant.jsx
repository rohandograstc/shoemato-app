function createData(rId, name, sales) {
  return {
    rId,
    name,
    sales,
  };
}

export const retailerRows = [
  createData("#876364", "abc", "1000"),
  createData("#876364", "abc", "1000"),
  createData("#876364", "abc", "1000"),
];
export const retailerTableHead = ["Retailer ID", "Name", "Sales"];
