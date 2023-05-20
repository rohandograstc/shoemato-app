import { Box } from "@mui/material";
import React from "react";
import InventoryTableHead from "./InventoryTableHead";
import InventoryTable from "./InventoryTable";

function InventoryInfo() {
  return (
    <>
      <Box>
        <InventoryTableHead />
        <InventoryTable />
      </Box>
    </>
  );
}

export default InventoryInfo;
