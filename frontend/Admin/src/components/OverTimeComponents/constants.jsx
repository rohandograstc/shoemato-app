const createData = (
  pId,
  category,
  location,
  addOn,
  totalStock,
  soldUnit,
  wholesalers,
  wLocation,
  mrp
) => {
  return {
    pId,
    category,
    location,
    addOn,
    totalStock,
    soldUnit,
    wholesalers,
    wLocation,
    mrp,
  };
}

export const rows = [
  createData(
    "#876364",
    "Sneaker",
    "Ghaziabad",
    "Today",
    1780,
    "1,46,660",
    10,
    "Ghaziabad",
    325
  ),
  createData(
    "#876364",
    "Sneaker",
    "Ghaziabad",
    "Today",
    1780,
    "1,46,660",
    10,
    "Ghaziabad",
    325
  ),
  createData(
    "#876364",
    "Sneaker",
    "Ghaziabad",
    "Today",
    1780,
    "1,46,660",
    10,
    "Ghaziabad",
    325
  ),
  createData(
    "#876364",
    "Sneaker",
    "Ghaziabad",
    "Today",
    1780,
    "1,46,660",
    10,
    "Ghaziabad",
    325
  ),
];
export const tableHead = [
  "Product ID",
  "Category",
  "Location",
  "Added on",
  "Total Stock",
  "Sold Unit",
  "Wholesalers",
  "Location",
  "MRP",
];
