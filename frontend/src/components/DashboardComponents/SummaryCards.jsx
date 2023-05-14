import React from "react";
import Cards from "@/components/DashboardComponents/Cards";
import ChartCard from "@/components/DashboardComponents/ChartCard";
import { Grid } from "@mui/material";
import { DrawerHeader } from "@/styledComponents/NavComponents";
import TopVendors from "./TopVendors";

export default function SummaryCards() {
  return (
    <>
      <DrawerHeader />
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={6}
          md={4}
          xl={4}
          sx={{ height: "400px", width: "fit-content" }}
        >
          <Cards />
        </Grid>
        <Grid item xs={6} md={4} xl={4} sx={{ height: "400px" }}>
          <ChartCard />
        </Grid>
        <Grid item xs={6} md={4} xl={4} sx={{ height: "400px" }}>
          <TopVendors />
        </Grid>
      </Grid>
    </>
  );
}
