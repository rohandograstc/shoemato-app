import DailyQueue from "@/components/DashboardComponents/DailyQueue";
import SummaryCards from "@/components/DashboardComponents/SummaryCards";
import Transactions from "@/components/DashboardComponents/Transactions";
import SideNav from "@/components/SideNav/SideNav";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function DashBoard() {
  return (
    <Box
      sx={{
        display: "flex",
        fontFamily: "Montserrat",
        fontStyle: "normal",
      }}
    >
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box>
          <SummaryCards />
          <DailyQueue/>
          <Transactions/>
        </Box>
      </Box>
    </Box>
  );
}
