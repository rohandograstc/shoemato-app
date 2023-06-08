import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import styles from "./DashboardComponents/dashboard.module.css";
import { Palette } from "@devexpress/dx-react-chart";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { CellTypo } from "@/styledComponents/CellTypo";

const ChartCard = () => {
  const data = [
    { argument: "Monday", value: 10 },
    { argument: "Tuesday", value: 40 },
    { argument: "Wednesday", value: 10 },
    { argument: "Thursday", value: 5 },
    { argument: "Friday", value: 10 },
    { argument: "Saturday", value: 20 },
    { argument: "Sunday", value: 5 },
  ];
  const colors = [
    "rgba(254, 208, 238, 0.7)",
    "rgba(208, 232, 255, 0.7)",
    "rgba(251, 227, 142, 0.7)",
    "rgba(251, 227, 142, 0.7)",
    "rgba(169, 244, 208, 0.7)",
    "rgba(219, 174, 255, 0.7)",
    "rgba(253, 208, 159, 0.7)",
  ];
  const colorsArray = [
    {
      name: "Red",
      dotbgcolor: "rgba(254, 174, 174, 0.7)",
    },
    {
      name: "Blue",
      dotbgcolor: "rgba(208, 232, 255, 0.7)",
    },
    {
      name: "Yellow",
      dotbgcolor: "rgba(251, 227, 142, 0.7)",
    },
    {
      name: "Green",
      dotbgcolor: "rgba(169, 244, 208, 0.7)",
    },
  ];
  return (
    <Paper className={styles.chartComponent}>
      <HeadingTypo variant="h5">Sale Overview</HeadingTypo>
      <Chart data={data} className={styles.chartContainer}>
        <Palette scheme={colors} />
        <PieSeries valueField="value" argumentField="argument" />
      </Chart>
      <Box className={styles.colorContainer}>
        {colorsArray.map((data, id) => (
          <Box key={id} className={styles.colorInnerContainer}>
            <Box
              className={styles.dotColor}
              sx={{ backgroundColor: `${data.dotbgcolor}` }}
            />
            <CellTypo variant="span">{data.name}</CellTypo>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default ChartCard 