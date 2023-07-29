import SoloComponentsTable from "@/components/VendorsSoloComponents/SoloComponentsTable";
import SoloHead from "@/components/VendorsSoloComponents/SoloHead";
import VendorsSoloCards from "@/components/VendorsSoloComponents/VendorsSoloCards";
import React from "react";

const ManufacturerIndex = () => {
  return (
    <>
      <SoloHead name={"Retailer Name"} />
      <VendorsSoloCards />
      <SoloComponentsTable />
    </>
  );
};

export default ManufacturerIndex;
