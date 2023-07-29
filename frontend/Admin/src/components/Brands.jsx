import { Box, Paper, Typography } from "@mui/material";
import React from "react";

import styles from "./DashboardComponents/dashboard.module.css";
import { AddButton, CategoryButton } from "./CategoryAddButton";
import { headingStyle } from "@/globalStyles/typoStyles";

const Brands = ({ report }) => {
  const brandNameArray = [
    {
      name: "International Brands",
      bcolor: "#FFFFFF",
      num: 10,
    },
    {
      name: "National Brands",
      bcolor: "#FFFFFF",
      num: 5,
    },
    {
      name: "Local Brands",
      bcolor: "#FFFFFF",
      num: 15,
    },
    {
      name: "Men",
      bcolor: "#FFFFFF",
      num: 10,
    },
    {
      name: "Women",
      bcolor: "#FFFFFF",
      num: 5,
    },
    {
      name: "Child",
      bcolor: "#FFFFFF",
      num: 15,
    },
  ];
  return (
    <Paper className={styles.brandComponent}>
      <Box className={styles.brandSection}>
        {brandNameArray.map((text, index) => (
          <Box
            key={index}
            className={styles.brandContainer}
            sx={{ bgcolor: text.bcolor }}
          >
            <Typography variant="h5" sx={headingStyle}>
              {text.name}
            </Typography>
            <Typography variant="h5" className={styles.brandNum}>
              {text.num}
              <Typography variant="span" className={styles.brandUnit}>
                K
              </Typography>
            </Typography>
          </Box>
        ))}
      </Box>
      {!report && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <CategoryButton />
          <AddButton />
        </Box>
      )}
    </Paper>
  );
};
export default Brands;
