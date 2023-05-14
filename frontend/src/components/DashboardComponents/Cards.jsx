import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";

export default function Cards() {
  const cardArray = [
    {
      name: "Total Turnover",
      number: 5,
      unit: "Cr",
    },
    {
      name: "Commission",
      number: 5,
      unit: "Cr",
    },
    {
      name: "Credit Limit",
      number: 5,
      unit: "Cr",
    },
    {
      name: "Total vendor",
      number: 5,
      unit: "Cr",
    },
  ];
  return (
    <Box component="div" className={styles.cardContainer}>
      {cardArray.map((data, index) => (
        <Box key={index} className={styles.cardDiv}>
          <Typography variant="h5" className={styles.cardTitle}>
            {data.name}
          </Typography>
          <Box>
            <Typography variant="h1" className={styles.cardValue}>
              {data.number}
            </Typography>
            <Typography variant="span" className={styles.cardValueUnit}>
              {data.unit}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
