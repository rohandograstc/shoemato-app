import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import styles from "./dashboard.module.css";

export default function ChartCard() {
  const data = [
    { argument: "Monday", value: 10 },
    { argument: "Tuesday", value: 40 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 5 },
    { argument: "Friday", value: 10 },
    { argument: "Saturday", value: 20 },
    { argument: "Sunday", value: 5 },
  ];
  return (
    <Paper className={styles.chartComponent}>
      <Typography
        variant="h5"
        className={styles.cardTitle}
        sx={{ textAlign: "center" }}
      >
        Sale Overview
      </Typography>
      <Chart data={data} className={styles.chartContainer}>
        <PieSeries valueField="value" argumentField="argument" />
      </Chart>
      <Box className={styles.colorContainer}>
        <Box className={styles.dotColor} sx={{ backgroundColor: "red" }} />
        <Typography variant="span">Red</Typography>
        <Box className={styles.dotColor} sx={{ backgroundColor: "blue" }} />
        <Typography variant="span">Blue</Typography>
        <Box className={styles.dotColor} sx={{ backgroundColor: "yellow" }} />
        <Typography variant="span">Yellow</Typography>
        <Box className={styles.dotColor} sx={{ backgroundColor: "green" }} />
        <Typography variant="span">Green</Typography>
      </Box>
    </Paper>
  );
}
