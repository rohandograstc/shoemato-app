import React from "react";
import Cards from "@/components/DashboardComponents/SummaryCardsComponent/Cards";
import ChartCard from "@/components/DashboardComponents/SummaryCardsComponent/ChartCard";
import { Grid } from "@mui/material";
import TopVendors from "./SummaryCardsComponent/TopVendors";

const SummaryCards =()=> {
  return (
    <>
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
export default SummaryCards