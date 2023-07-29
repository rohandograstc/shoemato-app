import { Box } from "@mui/material";
import ManufacturerHead from "../../../components/VendorsComponents/VendorOther/Head";
import ManufacturerInfo from "../../../components/VendorsComponents/VendorOther/Info";

const Manufacturer = () => {
  const headArray = [
    {
      name: "MANUFACTURERS",
      btnradius: "100px 0px 0px 100px",
      btncolor: "#fff",
      path : "/vendors/manufacturer"
    },
    {
      name: "WHOLESALER",
      btnradius: "0px",
      btncolor: "#0D1A261A",
      borderwidth: "1px 0px",
      path : "/vendors/wholesaler"
    },
    {
      name: "RETAILER",
      btnradius: "0px 100px 100px 0px",
      btncolor: "#fff",
      path : "/vendors/retailer"
    },
  ];

  const headerTitle = "List of Wholesalers";
  const pathId = "wholesaler"
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <ManufacturerHead headArray={headArray} nameIndex={1} />
      <ManufacturerInfo headerTitle={headerTitle} pathId={pathId} />
    </Box>
  );
};
export default Manufacturer;
