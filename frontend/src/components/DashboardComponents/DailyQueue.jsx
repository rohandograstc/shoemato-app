import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import { StyledSlider } from "@/styledComponents/StyledSlider";

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
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0D1A26",
            borderRadius: "24px",
            padding:"7px 10px",
            "&:hover": {
              backgroundColor: "#0D1A26",
            },
          }}
        >
          <Typography variant="p" className={styles.overDuesBtnText} >Overdues</Typography>
          <Box className={styles.totalOverduesDiv} ><Typography className={styles.totalOverdues} variant="span" >34</Typography></Box>
        </Button>
      </Box>
    </Box>
  );
}
