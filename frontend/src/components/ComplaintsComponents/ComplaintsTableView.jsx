import React from "react";
import ComplaintsTable from "./ComplaintsTransaction/ComplaintsTable";
import { Box, Paper } from "@mui/material";
import TransactionHeader from "../TransactionHeader";
const ComplaintsTableView = () => {
  const headArray = [
    {
      name: "Complaints",
      btnWidth: "180px",
      btnRadius: "0px 10px 10px 0px",
      mrx: "10px",
    },
  ];
  return (
    <Box
      sx={{
        padding: "0 20px",
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
          searchwidth={"150px"}
          calendar={true}
          renewwhite={false}
        />
        <ComplaintsTable />
      </Paper>
    </Box>
  );
};

export default ComplaintsTableView;
