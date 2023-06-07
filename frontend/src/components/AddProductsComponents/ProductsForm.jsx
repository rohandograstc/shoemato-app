import React from "react";

import styles from "./addproducts.module.css";

import { Box, FormControlLabel } from "@mui/material";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { IOSSwitch } from "@/styledComponents/SwitchStyled";
import { StyledButton } from "@/styledComponents/StyledBtn";
import ProdInput from "./SubComponents/ProdInput";
import TypeSection from "./SubComponents/TypeSection";
import PricesSection from "./SubComponents/PricesSection";

export const placeHolderStyle = {
  "& .MuiInputBase-input": {
    "::placeholder": {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "160%",
      color: "#79777d",
    },
  },
};
export const smallplaceHolderStyle = {
  padding: "0px",
  "& ..MuiOutlinedInput-root": {
    padding: 0,
  },
  "& .MuiInputBase-input": {
    "::placeholder": {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "16px",
      textAlign: "center",
      lineHeight: "160%",
      color: "#79777d",
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
          <HeadingTypo variant="span" style={{ color: "#79767C" }}>
            In Stock
          </HeadingTypo>
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
          <HeadingTypo variant="p" fsize={"14px"}>
            SAVE
          </HeadingTypo>
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
          <HeadingTypo variant="p" fsize={"14px"}>
            Discard
          </HeadingTypo>
        </StyledButton>
      </Box>
    </Box>
  );
};

export default ProductsForm;
