import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./prodCategory.module.css";

const ProdCategoryCard = () => {
  return (
    <Box
      sx={{
        padding: "0 100px 0 60px",
        marginBottom: "20px",
      }}
    >
      <Box className={styles.cardDiv}>
        <HeadingTypo variant="h5">Total Categories</HeadingTypo>
        <Box>
          <Typography variant="h1" className={styles.cardValue}>
            6
          </Typography>
          <Typography variant="span" className={styles.cardValueUnit}>
            Units
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProdCategoryCard;
