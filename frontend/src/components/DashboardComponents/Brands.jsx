import { Box, Paper, Typography } from "@mui/material";
import React from "react";

import styles from "./dashboard.module.css";
import {
  StyledButton,
  StyledReportIcon,
} from "@/styledComponents/NavComponents";

export default function Brands() {
  const brandNameArray = [
    "International Brands",
    "National Brands",
    "Local Brands",
  ];
  const bradnNumArray = [10, 5, 15];
  return (
    <Paper className={styles.brandComponent}>
      <Box className={styles.brandSection}>
        {brandNameArray.map((text, index) => (
          <Box key={index} className={styles.brandContainer}>
            <Typography variant="h3" className={styles.brandName}>
              {text}
            </Typography>
            <Typography variant="h5" className={styles.brandNum}>
              {bradnNumArray[index]}
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
