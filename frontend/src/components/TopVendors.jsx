import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./DashboardComponents/dashboard.module.css";
import { BorderLinearProgress } from "@/styledComponents/BorderLinearProgress";

import MyCustomIcon from "@/assets/svg/dropdownIcon";
import { headingStyle, paraStyle } from "@/globalStyles/typoStyles";

export const MonthlySelect = ({ text }) => {
  return (
    <FormControl>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={1}
        className={styles.customSelectRoot}
        IconComponent={() => <MyCustomIcon />}
        sx={{
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          paddingLeft: "10px",
          paddingRight: "10px",
          "#demo-simple-select": {
            paddingRight: "3px",
            paddingLeft: 0,
          },
        }}
      >
        <MenuItem value={1}>{text ? text : "Monthly"}</MenuItem>
        <MenuItem value={2}>Yearly</MenuItem>
        <MenuItem value={3}>Days</MenuItem>
      </Select>
    </FormControl>
  );
};

const TopVendors = () => {
  const vendorNameArray = [
    {
      name: "Vendor",
      value: 80,
      color: "#FE9496",
      sales: "23,400",
    },
    {
      name: "B",
      value: 30,
      color: "#4BCBEB",
      sales: "15,00",
    },
    {
      name: "C",
      value: 95,
      color: "#FE9496",
      sales: "30,000",
    },
    {
      name: "D",
      value: 40,
      color: "#4BCBEB",
      sales: "22,000",
    },
    {
      name: "E",
      value: 20,
      color: "#4BCBEB",
      sales: "23,400",
    },
    {
      name: "F",
      value: 80,
      color: "#FE9496",
      sales: "23,400",
    },
    {
      name: "G",
      value: 15,
      color: "#4BCBEB",
      sales: "5,000",
    },
  ];

  return (
    <Paper className={styles.vendorsComponent}>
      <Box className={styles.venderHeader}>
        <Typography variant="h5" sx={headingStyle}>
          Turnover
        </Typography>
        <MonthlySelect />
      </Box>
      <Box sx={{ height: "80%" }} className={styles.venderInfoContainer}>
        {vendorNameArray.map((vendorData, index) => (
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            className={styles.vendorInfo}
            key={index}
          >
            <Grid item xs={2} md={3}>
              <Typography variant="h5" sx={paraStyle}>
                {vendorData.name}
              </Typography>
            </Grid>
            <Grid
              item
              xs={10}
              md={9}
              className={styles.progressBar}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <BorderLinearProgress
                value={vendorData.value}
                variant="determinate"
                bg={vendorData.color}
                sx={{ width: `${vendorData.value}%` }}
              />
              <Typography variant="h5" sx={paraStyle}>
                {vendorData.sales}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Paper>
  );
};
export default TopVendors;
