import React from "react";
import TransactionHeader from "../TransactionHeader";
import { Box, Paper } from "@mui/material";
import ProdCategoryTable from "./ProdCategoryTable";
import { AddButton } from "../CategoryAddButton";

const ProdTableInfo = () => {
  const headArray = [
    {
      name: "Categories",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "5px",
    },
  ];
  return (
    <Box
      sx={{
        padding: "0 100px 0 60px",
        position: "relative",
        minHeight : '80vh'
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
        <TransactionHeader headArray={headArray} searchwidth={"320px"} calendar={false} />
        <ProdCategoryTable />
      </Paper>
      <Box
      sx={{
        position : "absolute",
        right : 0,
        bottom : 0,

      }}
      >
        <AddButton bwidth={"90px"} />
      </Box>
    </Box>
  );
};

export default ProdTableInfo;
