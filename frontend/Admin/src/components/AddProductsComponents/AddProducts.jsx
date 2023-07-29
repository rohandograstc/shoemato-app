import { Grid } from "@mui/material";
import React from "react";
import ProductsSection from "./ProductsSection";
import ProductsForm from "./ProductsForm";

const AddProducts = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={3} md={4} xl={4}>
          <ProductsSection />
        </Grid>
        <Grid item xs={9} md={8} xl={8}>
          <ProductsForm />
        </Grid>
      </Grid>
    </>
  );
};

export default AddProducts;
