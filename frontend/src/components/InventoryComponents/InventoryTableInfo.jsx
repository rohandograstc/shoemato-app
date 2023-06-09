import { Box, Paper } from "@mui/material";
import React from "react";
import TransactionHeader from "../TransactionHeader";
import { AddButton } from "../CategoryAddButton";
import InventoryTable from "./InventoryTable";

const InventoryTableInfo = () => {
  const headArray = [
    {
      name: "Manufactures",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "2px",
      bgcolor: "white",
      tcolor: "black",
      btnshadow: "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.35)",
    },
    {
      name: "Wholesalers",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "2px",
    },
    {
      name: "Retailers",
      btnWidth: "180px",
      btnRadius: "0px 10px 10px 0px",
      mrx: "10px",
    },
  ];
  return (
    <Box
      sx={{
        padding: "0 100px",
        position: "relative",
        minHeight: "80vh",
        marginTop: "20px",
      }}
    >
      <Paper
        sx={{
          borderTopLeftRadius: "15px",
          paddingBottom: "5px",
          height: "100%",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TransactionHeader
          headArray={headArray}
          searchwidth={"320px"}
          calendar={false}
          renewwhite={true}
        />
        <InventoryTable />
      </Paper>

    </Box>
  );
};

export default InventoryTableInfo;
