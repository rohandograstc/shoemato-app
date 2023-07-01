const createData = (
  invId,
  manufName,
  category,
  updatedOn,
  totalStock,
  soldUnit,
  wholeSalers,
  loc,
  totalCredit
) => {
  return {
    invId,
    manufName,
    category,
    updatedOn,
    totalStock,
    soldUnit,
    wholeSalers,
    loc,
    totalCredit,
  };
}

export const rows = [
  createData(
    "#876364",
    "Nike",
    "International",
    "Today",
    "1780",
    "1,46,660",
    "10",
    "Ghaziabad",
    "325"
  ),
  createData(
    "#876364",
    "Nike",
    "International",
    "Today",
    "1780",
    "1,46,660",
    "10",
    "Ghaziabad",
    "325"
  ),
];
export const tableHead = [
  "Inventory ID",
  "Manufactures Name",
  "Category",
  "Updated on",
  "Total Stock ",
  "Sold Unit",
  "Wholesalers",
  "Location",
  "Total Credit",
];
