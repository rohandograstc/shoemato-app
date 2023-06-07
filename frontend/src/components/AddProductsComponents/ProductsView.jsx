import Image from "next/image";
import React from "react";

import { Box, Typography } from "@mui/material";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import styles from "./addproducts.module.css";

import shoeIcon from "../../assets/svg/shoeIcon.svg";
import minusIcon from "../../assets/svg/minusIcon.svg";

const ProductsView = ({ viewName }) => {
  return (
    <Box className={styles.productViewCon}>
      <Image alt={"productIcon"} src={shoeIcon} />
      <Box className={styles.productContentCon}>
        <Typography variant="p" className={styles.contentTypo}>
          {viewName} View Image
        </Typography>
        <LinearProgress
          variant={"determinate"}
          sx={{
            [`&.${linearProgressClasses.colorPrimary}`]: {
              backgroundColor: "#FFFFFF",
              boxShadow : "0px 4px 12px rgba(0, 0, 0, 0.3)",
            },
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: "#1E1E1E",
            },
          }}
          value={70}
        />
      </Box>
      <Image alt={"removeIcon"} src={minusIcon} />
    </Box>
  );
};

export default ProductsView;
