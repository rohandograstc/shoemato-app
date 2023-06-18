import { Box, Paper } from "@mui/material";
import React from "react";
import TransactionHeader from "../TransactionHeader";
import SoloTable from "./SoloTable";

const SoloTableInfo = ({
  tableName,
  tablesizeFixed,
  rows,
  tableHead,
  twidth,
}) => {
  const headArray = [
    {
      name: `${tableName}`,
      btnWidth: "180px",
      btnRadius: "10px 10px 10px 0px",
      mrx: "5px",
    },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "30vh",
        padding: "5px",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <Paper
        sx={{
          borderRadius: "10px",
          paddingBottom: "5px",
          height: "100%",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TransactionHeader
          headArray={headArray}
          searchwidth={"320px"}
          calendar={false}
          searchIcon={false}
        />
        <SoloTable
          tablesizeFixed={tablesizeFixed}
          rows={rows}
          tableHead={tableHead}
          twidth={twidth}
        />
      </Paper>
    </Box>
  );
};

export default SoloTableInfo;
