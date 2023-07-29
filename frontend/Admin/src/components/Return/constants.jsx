const createData = (tId, mId, vId, date, amount, status, action) => {
  return {
    tId,
    mId,
    vId,
    date,
    amount,
    status,
    action,
  };
}

export const rows = [
  createData("#876361", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
  createData("#876362", "Manufacturer ID", "Retailer", "12/04/23", 10000, "Pending", ""),
  createData("#876363", "Manufacturer ID", "Retailer", "12/04/23", 20000, "Success", ""),
  createData("#876364", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
  createData("#876361", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
  createData("#876362", "Manufacturer ID", "Retailer", "12/04/23", 10000, "Pending", ""),
  createData("#876363", "Manufacturer ID", "Retailer", "12/04/23", 20000, "Success", ""),
  createData("#876364", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
  createData("#876361", "Manufacturer ID", "Wholesaler ID", "12/04/23", 10000, "Success", ""),
];

export const tableHead = [
  "Transaction ID",
  "Vendor ID",
  "Vendor ID",
  "Date",
  "Amount",
  "Status",
  "Action",
];
