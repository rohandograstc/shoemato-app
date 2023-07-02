import { CardDiv } from "@/styledComponents/Card";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./soloComponents.module.css";
import { headingStyle } from "@/globalStyles/typoStyles";

const EarningReports = () => {
  return (
    <CardDiv boxwidth={"100%"} boxheight={"98%"}>
      <Typography variant="h4" sx={headingStyle}>
        Earning Reports
      </Typography>
      <Box className={styles.earningDetailCon}>
        <Typography sx={{ ...headingStyle, fontWeight: "400" }} variant="h5">
          Net Profit
        </Typography>
        <Typography sx={{ ...headingStyle, fontWeight: "400" }} variant="h5">
          Net Expenses
        </Typography>
        <Typography sx={{ ...headingStyle, fontWeight: "400" }} variant="h5">
          Net Income
        </Typography>
      </Box>
    </CardDiv>
  );
};

export default EarningReports;
