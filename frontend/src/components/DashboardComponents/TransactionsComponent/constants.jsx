const createData = (userId, userName, category) => {
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


const bcreateData = (inId, name, tag, date, email, status) => {
  return {
    inId,
    name,
    tag,
    date,
    email,
  };
}

export const brows = [
  bcreateData("NIKE", "1200", "34", "405", "46,600"),
];
export const btableHead = [
  "Brand Name",
  "Total Orders",
  "Total Tenure",
  "Total Commission",
  "Total Estimated Profits",
];
