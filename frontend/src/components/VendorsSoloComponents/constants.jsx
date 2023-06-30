function createData(mId, name, stock) {
  return {
    mId,
    name,
    stock
  };
}

export const rows = [
  createData("#876364", "abc", "1000"),
  createData("#876364", "abc", "1000"),
  createData("#876364", "abc", "1000"),
];
export const tableHead = ["Wholesaler ID", "Name", "Stock(in)"];
