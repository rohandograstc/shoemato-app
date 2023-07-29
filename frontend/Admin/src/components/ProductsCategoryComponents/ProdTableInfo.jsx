import React from "react";
import TransactionHeader from "../TransactionHeader";
import { Box, Paper, Typography } from "@mui/material";
import ProdCategoryTable from "./ProdCategoryTable";
import AddCategoryBtn from "./AddCategoryBtn";

const ProdTableInfo = () => {
  const headArray = [
    {
      name: "Categories",
      btnWidth: "180px",
      btnRadius: "0px 0px 10px 0px",
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
          calendar={false}
          searchIcon={true}
          renewwhite={true}
        />
        <ProdCategoryTable />
      </Paper>
      <AddCategoryBtn />
    </Box>
  );
};

export default ProdTableInfo;
