function createData(userId, userName, category) {
  return {
    userId,
    userName,
    category,
  };
}

export const rows = [
  createData("#876364", "ABC", "Manufacturer"),
  createData("#876364", "ABC", "Wholesaler"),
];
export const tableHead = ["User ID", "User Name", "Category"];
