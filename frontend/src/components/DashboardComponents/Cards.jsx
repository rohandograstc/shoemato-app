import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";

export default function Cards() {
  return (
    <Box component="div" className={styles.cardContainer}>
      <Box className={styles.cardDiv}>
        <Typography variant="h5" className={styles.cardTitle}>
          Total Turnover
        </Typography>
        <Box>
          <Typography variant="h1" className={styles.cardValue}>
            5
          </Typography>
          <Typography variant="span" className={styles.cardValueUnit}>
            cr
          </Typography>
        </Box>
      </Box>
      <Box className={styles.cardDiv}>
        <Typography variant="h5" className={styles.cardTitle}>
          Commission
        </Typography>
        <Box>
          <Typography variant="h1" className={styles.cardValue}>
            5
          </Typography>
          <Typography variant="span" className={styles.cardValueUnit}>
            cr
          </Typography>
        </Box>
      </Box>
      <Box className={styles.cardDiv}>
        <Typography variant="h5" className={styles.cardTitle}>
          Credit Limit
        </Typography>
        <Box>
          <Typography variant="h1" className={styles.cardValue}>
            10
          </Typography>
          <Typography variant="span" className={styles.cardValueUnit}>
            cr
          </Typography>
        </Box>
      </Box>
      <Box className={styles.cardDiv}>
        <Typography variant="h5" className={styles.cardTitle}>
          Users
        </Typography>
        <Box>
          <Typography variant="h1" className={styles.cardValue}>
            40
          </Typography>
          <Typography variant="span" className={styles.cardValueUnit}>
            k
          </Typography>
        </Box>
      </Box>
      <Box className={styles.cardDiv}>
        <Typography variant="h5" className={styles.cardTitle}>
          Total Vendors
        </Typography>
        <Box>
          <Typography variant="h1" className={styles.cardValue}>
            10
          </Typography>
          <Typography variant="span" className={styles.cardValueUnit}>
            k
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
