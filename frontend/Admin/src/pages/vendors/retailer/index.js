import { Box } from "@mui/material";
import RetailerHead from "../../../components/VendorsComponents/VendorOther/Head";
import RetailerInfo from "../../../components/VendorsComponents/VendorOther/Info";

const Manufacturer = () => {
  const headArray = [
    {
      name: "MANUFACTURERS",
      btnradius: "100px 0px 0px 100px",
      btncolor: "#fff",
      path: "/vendors/manufacturer",
    },
    {
      name: "WHOLESALER",
      btnradius: "0px",
      borderwidth: "1px 0px",
      btncolor: "#fff",
      path: "/vendors/wholesaler",
    },
    {
      name: "RETAILER",
      btnradius: "0px 100px 100px 0px",
      btncolor: "#0D1A261A",
      path: "/vendors/retailer",
    },
  ];

  const headerTitle = "List of Retailers";
  const pathId = "retailer";
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <RetailerHead headArray={headArray} nameIndex={2} />
      <RetailerInfo headerTitle={headerTitle} pathId={pathId} />
    </Box>
  );
};
export default Manufacturer;
