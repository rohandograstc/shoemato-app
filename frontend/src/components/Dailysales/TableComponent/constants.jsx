function createData(mId, vId, totalSales, date, amount, status, action) {
  return {
    mId,
    vId,
    totalSales,
    date,
    amount,
    status,
    action,
  };
}

export const rows = [
  createData("#876364", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
  createData("#876364", "Manufacturer ID", "Retailer", "12/04/23", 10000, "Pending", ""),
  createData("#876364", "Manufacturer ID", "Retailer", "12/04/23", 20000, "Success", ""),
  createData("#876364", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
];

export const tableHead = [
  "Manufactures Name",
  "Vendor ID",
  "Total Sales",
  "Date",
  "Amount",
  "Status",
  "Action",
];
