import { CardDiv } from "@/styledComponents/Card";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./soloComponents.module.css"

const EarningReports = () => {
  return (
    <CardDiv boxwidth={"100%"} boxheight={"98%"}>
      <HeadingTypo variant="h4">Earning Reports</HeadingTypo>
      <Box className={styles.earningDetailCon} >
        <Typography className={styles.earningDetailTypo}  variant="h5">Net Profit</Typography>
        <Typography className={styles.earningDetailTypo} variant="h5">Net Expenses</Typography>
        <Typography className={styles.earningDetailTypo} variant="h5">Net Income</Typography>
      </Box>
    </CardDiv>
  );
};

export default EarningReports;
