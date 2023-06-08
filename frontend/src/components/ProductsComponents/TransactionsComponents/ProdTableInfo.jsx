
import { Paper } from "@mui/material";
import React from "react";
import TransactionTable from "./TransactionTable";
import TransactionHeader from "@/components/TransactionHeader";

const ProdTableInfo = () => {
  return (
    <Paper
      sx={{
        borderTopLeftRadius: "15px",
        paddingBottom: "5px",
        height: "100%",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TransactionHeader prodHeader={true} calendar={true} headertext={"TOP SELLING PRODUCT"}  />
      <TransactionTable />
    </Paper>
  );
};

export default ProdTableInfo;
