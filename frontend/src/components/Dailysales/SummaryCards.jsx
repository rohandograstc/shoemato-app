import React from "react";
import { Grid, Typography } from "@mui/material";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import classes from "@/components/Dailysales/Dailysales.module.css";
import Cards from "@/components/Dailysales/SummaryCardsComponent/Cards";
import DispatchCard from "@/components/Dailysales/SummaryCardsComponent/DispatchCard";

const SummaryCards = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={4} xl={4} sx={{ height: "400px" }}>
          <HeadingTypo variant="h5" className={classes.heading}> Today's Sales </HeadingTypo>
          <Cards />
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          xl={4}
          sx={{ height: "400px", width: "fit-content" }}
        >
          <HeadingTypo variant="h5" className={classes.heading}> Today's Orders </HeadingTypo>
          <Cards />
        </Grid>
        <Grid item xs={6} md={4} xl={4} sx={{ height: "400px" }}>
        <HeadingTypo variant="h5" className={classes.heading}> Product Dispatched </HeadingTypo>
          <DispatchCard />
        </Grid>
      </Grid>
    </>
  );
};

export default SummaryCards;
