import { Box, Paper, Typography } from "@mui/material";
import React from "react";

import styles from "../dashboard.module.css";
import {
  StyledButton,
  StyledReportIcon,
} from "@/styledComponents/StyledBtn";

export default function Brands() {
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
      bcolor: "#DDFBFF",
      num: 10,
    },
    {
      name: "Women",
      bcolor: "#FEE4FF",
      num: 5,
    },
    {
      name: "Child",
      bcolor: "#FEFFCE",
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
            <Typography variant="h3" className={styles.brandName}>
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
      <Box className={styles.reportButton}>
        <StyledButton variant="contained" startIcon={<StyledReportIcon />}>
          <Typography variant="p" className={styles.reportBtnText}>
            Report
          </Typography>
        </StyledButton>
      </Box>
    </Paper>
  );
}
