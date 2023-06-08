import { Box } from "@mui/material";
import React from "react";
import InputField from "./InputField";
import AutoCompleteComponent from "./AutoCompleteComponent";
import styles from "../../addproducts.module.css";

const PricesSection = () => {
  return (
    <>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"Sale Price"} small={true} />
        <InputField placeHolder={"Lowest Price"} small={true} />
        <InputField placeHolder={"Wholesaler Price"} small={true} />
        <InputField placeHolder={"Retailer Price"} small={true} />
      </Box>

      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"MRP"} center={false} small={false} />
        <AutoCompleteComponent />
      </Box>
    </>
  );
};

export default PricesSection;
