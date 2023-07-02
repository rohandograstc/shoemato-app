// Image / Logo

import Logos from "../../assets/svg";

const IconArray = [
  Logos.dashboard,
  Logos.sales,
  Logos.products,
  Logos.returnIcon,
  Logos.orders,
  Logos.vendors,
  Logos.inventory,
  Logos.complaints,
  Logos.settings,
  Logos.dashboardDark,
  Logos.salesDark,
  Logos.productsDark,
  Logos.returnDark,
  Logos.ordersDark,
  Logos.vendorsDark,
  Logos.inventoryDark,
  Logos.complaintsDark,
  Logos.settings,
];

const sideNavArray = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Daily Sales", link: "/dailysales" },
  // { name: "Products" },
  { name: "Products", link: "/products" },
  { name: "Return", link: "/return" },
  // { name: "Invoice" },
  // { name: "Vendors" },
  // { name: "Daily Sales" },
  // { name: "Return" },
  { name: "Invoice", link: "/invoice" },
  { name: "Vendors", link: "/vendors" },
  { name: "Inventory", link: "/inventory" },
  { name: "Complaints", link: "/complaints" },
  { name: "Settings" },
];


export {IconArray, sideNavArray}