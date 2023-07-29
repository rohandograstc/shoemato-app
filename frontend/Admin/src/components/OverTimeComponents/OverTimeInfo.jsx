import { Box } from "@mui/material";
import React from "react";
import OverTimeTableHead from "./OverTimeTableHead";
import OverTimeTable from "./OverTimeTable";

const OverTimeInfo = () => {
  return (
    <>
      <Box>
        <OverTimeTableHead />
        <OverTimeTable />
      </Box>
    </>

  );
  
};

export default OverTimeInfo;
