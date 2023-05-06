import React from "react";
import Cards from "@/components/DashboardComponents/Cards";
import ChartCard from "@/components/DashboardComponents/ChartCard";
import { Box, Grid } from "@mui/material";
import { DrawerHeader } from "@/styledComponents/NavComponents";

export default function SummaryCards() {
  return (
    <>
      <DrawerHeader />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={6} xl={5} sx={{ height: "400px", width: "fit-content" }}>
          <Cards />
        </Grid>
        <Grid item xs={6} md={3} xl={3} sx={{ height: "400px" }}>
          <ChartCard />
        </Grid>
        <Grid item xs={6} md={3} xl={4} sx={{ height: "400px" }}>
          <div>Div 3</div>
        </Grid>
      </Grid>
    </>
  );
}
