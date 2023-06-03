import React from "react";
import { Grid } from "@mui/material";
import ProdCards from "./SummaryCardComponents/ProdCards";
import TopVendors from "../TopVendors";

const ProductsSummaryCards = () => {
  const cardArray = [
    {
      name: "Products VS Overall",
      number: "5/10",
      unit: "Units",
    },
    {
      name: "Commission",
      number: "50",
      unit: "%",
    },
  ];
  const soldArray = [
    {
      name: "Total Product Sold",
      number: "10",
      unit: "Units",
    },
    {
      name: "New Products",
      number: "20",
      unit: "Units",
    },
  ]
  return (
    <>
      <Grid container spacing={2} justifyContent="center" marginBottom={4}>
        <Grid
          item
          xs={6}
          md={3.4}
          xl={3.4}
          sx={{ height: "360px", width: "fit-content" }}
        >
          <ProdCards cardArray={cardArray} uploadCSV={true} />
        </Grid>
        <Grid item xs={6} md={5.2} xl={5.2} sx={{ height: "360px" }}>
          <ProdCards cardArray={soldArray} uploadCSV={false} />
        </Grid>
        <Grid item xs={6} md={3.4} xl={3.4} sx={{ height: "360px" }}>
          <TopVendors />
        </Grid>
      </Grid>
    </>

  );
};
export default ProductsSummaryCards;
