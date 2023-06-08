function createData(
  catId,
  catName,
  totalProducts,
  updatedOn,
  totalStock,
  soldUnit,
  wholeSalers,
  loc,
  actions
) {
  return {
    catId,
    catName,
    totalProducts,
    updatedOn,
    totalStock,
    soldUnit,
    wholeSalers,
    loc,
    actions,
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
    "X"
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
    "X"
  ),
];
export const tableHead = [
  "Category ID",
  "Category Name",
  "Total Products",
  "Updated on",
  "Total Stock ",
  "Sold Unit",
  "Wholesalers",
  "Location",
  "ACTIONS",
];
