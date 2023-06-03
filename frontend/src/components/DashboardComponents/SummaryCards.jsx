import React from "react";
import Cards from "@/components/DashboardComponents/SummaryCardsComponent/Cards";
import { Grid } from "@mui/material";
import ChartCard from "../ChartCard";
import TopVendors from "../TopVendors";

const SummaryCards = () => {
  const cardArray = [
    {
      name: "Total Turnover",
      number: 5,
      unit: "Units",
    },
    {
      name: "Commission",
      number: 5,
      unit: "Units",
    },
    {
      name: "Credit Limit",
      number: 5,
      unit: "Units",
    },
    {
      name: "Total vendor",
      number: 5,
      unit: "Units",
    },
  ];
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
          <Cards cardArray={cardArray} />
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
};
export default SummaryCards;
