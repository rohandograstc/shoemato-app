import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./prodCategory.module.css";
import { bigNumberStyle, headingStyle } from "@/globalStyles/typoStyles";

const ProdCategoryCard = () => {
  return (
    <Box
      sx={{
        padding: "0 100px 0 60px",
        marginBottom: "20px",
      }}
    >
      <Box className={styles.cardDiv}>
        <Typography variant="h5" sx={headingStyle}>
          Total Categories
        </Typography>
        <Box>
          <Typography
            variant="h1"
            className={styles.cardValue}
            sx={{ ...bigNumberStyle, marginRight: "10px", marginTop: "10px" }}
          >
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
