import React from "react";

import styles from "./addproducts.module.css";

import { Box, FormControlLabel, Typography } from "@mui/material";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { IOSSwitch } from "@/styledComponents/SwitchStyled";
import { StyledButton } from "@/styledComponents/StyledBtn";
import ProdInput from "./SubComponents/ProductFormComp/ProdInput";
import TypeSection from "./SubComponents/ProductFormComp/TypeSection";
import PricesSection from "./SubComponents/ProductFormComp/PricesSection";
import {
  headingStyle,
  inputStyle,
  subHeadingStyle,
} from "@/globalStyles/typoStyles";

export const placeHolderStyle = {
  outline: "none",
  "& .MuiInputBase-input": {
    "::placeholder": { ...inputStyle, color: "#232321" },
  },
};
export const smallplaceHolderStyle = {
  padding: "0px",
  "& ..MuiOutlinedInput-root": {
    padding: 0,
  },
  outline: "none",
  "& .MuiInputBase-input": {
    "::placeholder": {
      ...inputStyle,
      textAlign: "center",
      color: "#232321",
    },
  },
};

const ProductsForm = () => {
  return (
    <Box className={styles.prodFormSection}>
      <Box className={styles.prodFormCon}>
        <ProdInput />
        <TypeSection />
        <PricesSection />

        {/* In Stock Button  */}

        <Box className={styles.inputFieldCon}>
          <Typography variant="span" sx={{ ...headingStyle, color: "#79767C" }}>
            In-Stock
          </Typography>
          <FormControlLabel
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
          />
        </Box>
      </Box>

      {/* Button Section  */}

      <Box className={styles.inputFieldCon}>
        <StyledButton
          btnradius={"10px"}
          variant="contained"
          btnwidth={"200px"}
          btnpad={"10px"}
        >
          <Typography variant="p" sx={subHeadingStyle}>
            SAVE
          </Typography>
        </StyledButton>
        <StyledButton
          btnradius={"10px"}
          variant="contained"
          btnwidth={"200px"}
          btnpad={"10px"}
          bgcolor={"white"}
          tcolor={"black"}
          style={{ border: "1px solid black", boxShadow: "none" }}
        >
          <Typography variant="p" sx={subHeadingStyle}>
            Discard
          </Typography>
        </StyledButton>
      </Box>
    </Box>
  );
};

export default ProductsForm;
