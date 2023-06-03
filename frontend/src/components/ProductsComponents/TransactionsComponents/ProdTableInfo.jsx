
import { Paper } from "@mui/material";
import React from "react";
import TransactionTable from "./TransactionTable";
import TransactionHeader from "@/components/TransactionHeader";

const ProdTableInfo = () => {
  const headArray = [
    {
      name: "Brand",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "5px",
    },
    {
      name: "Vendor",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "5px",
      bgcolor: "white",
      tcolor: "black",
    },
    {
      name: "Transactions",
      btnWidth: "fit-content",
      btnRadius: "0px 10px 10px 0px",
      mrx: "10px",
      bgcolor: "white",
      tcolor: "black",
    },
  ];
  return (
    <Paper
      sx={{
        borderTopLeftRadius: "15px",
        paddingBottom: "5px",
        height: "100%",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TransactionHeader headArray={headArray} prodHeader={true} />
      <TransactionTable />
    </Paper>
  );
};

export default ProdTableInfo;
