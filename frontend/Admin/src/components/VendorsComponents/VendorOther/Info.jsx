import { Paper } from "@mui/material";
import React from "react";
import TransactionTable from "./Table";
import TransactionHeader from "@/components/TransactionHeader";

const ProdTableInfo = ({ headerTitle, pathId, calendarText }) => {
  return (
    <Paper
      sx={{
        borderTopLeftRadius: "15px",
        paddingBottom: "5px",
        height: "100%",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        // boxShadow: "none",
        width: "90%",
        margin: "0 auto",
      }}
    >
      <TransactionHeader
        prodHeader={true}
        headertext={headerTitle}
        searchIcon={true}
        calendarText={calendarText}
      />
      <TransactionTable pathId={pathId} />
    </Paper>
  );
};

export default ProdTableInfo;
