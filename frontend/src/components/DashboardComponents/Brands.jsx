import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

import styles from "./dashboard.module.css";
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

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
        <Button
          variant="contained"
          startIcon={<ReportGmailerrorredOutlinedIcon />}
          sx={{
            width: "100%",
            backgroundColor: "#0D1A26",
            borderRadius: "24px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#0D1A26",
            },
          }}
        >
          <Typography variant="p" className={styles.reportBtnText}>Report</Typography>
        </Button>
      </Box>
    </Paper>
  );
}
