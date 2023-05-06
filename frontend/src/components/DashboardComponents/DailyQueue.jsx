import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import { StyledSlider } from "@/styledComponents/NavComponents";

export default function DailyQueue() {
  return (
    <Box className={styles.dailyQueueContainer}>
      <Typography variant="h3" className={styles.dailyQueueTitle}>
        Daily Queue
      </Typography>
      <Box className={styles.dailyQueueOptionContainer}>
        <Typography
          variant="h3"
          className={styles.dailyQueueOptions}
          sx={{ display: "inline-block" }}
        >
          Total Orders
        </Typography>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Typography
          variant="h3"
          className={styles.dailyQueueOptions}
          sx={{ display: "inline-block" }}
        >
          PENDING ORDERS
        </Typography>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Typography
          variant="h3"
          className={styles.dailyQueueOptions}
          sx={{ display: "inline-block" }}
        >
          COMPLETED ORDERS
        </Typography>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </Box>
  );
}
