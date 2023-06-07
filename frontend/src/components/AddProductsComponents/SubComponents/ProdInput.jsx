import { Box, OutlinedInput } from "@mui/material";
import React from "react";
import InputField from "./InputField";

import styles from "../addproducts.module.css";
import { placeHolderStyle } from "../ProductsForm";

const ProdInput = () => {
  return (
    <>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"Brand Name(Eg nike) *"} />
        <InputField placeHolder={"SKU code #AutoGenerated"} />
      </Box>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"Product Name (Jordaan)*"} />
        <InputField placeHolder={"Product ID"} />
      </Box>
      <Box className={styles.inputFieldCon}>
        <InputField placeHolder={"Category (Men, Women, Kids)"} />
        <InputField placeHolder={"Sub Category"} />
      </Box>
      <OutlinedInput
        id="filled-multiline-static"
        multiline
        rows={4}
        placeholder="Description"
        sx={placeHolderStyle}
      />
    </>
  );
};

export default ProdInput;
