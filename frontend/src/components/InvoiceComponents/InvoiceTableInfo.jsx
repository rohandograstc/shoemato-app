import { Box, Paper } from "@mui/material";
import React from "react";
import TransactionHeader from "../TransactionHeader";
import InvoiceTable from "./InvoiceTable";

const InvoiceTableInfo = () => {
  const headArray = [
    {
      name: "Invoice",
      btnWidth: "180px",
      btnRadius: "10px 10px 10px 0px",
      mrx: "5px",
    },
  ];
  return (
    <Box
      sx={{
        padding: "0 100px 0 60px",
        position: "relative",
        minHeight: "80vh",
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
          calendar={true}
        />
        <InvoiceTable />
      </Paper>
    </Box>
  );
};

export default InvoiceTableInfo;
