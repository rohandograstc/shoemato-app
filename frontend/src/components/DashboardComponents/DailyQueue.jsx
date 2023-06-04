import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import { StyledSlider } from "@/styledComponents/StyledSlider";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { CellTypo } from "@/styledComponents/CellTypo";

const DailyQueue =()=> {
  return (
    <Box className={styles.dailyQueueContainer}>
      <HeadingTypo variant="h5" sx={{ paddingLeft: "10px" }}>
        Daily Queue
      </HeadingTypo>
      <Box className={styles.dailyQueueOptionContainer}>
        <CellTypo variant="h3">TOTAL ORDERS</CellTypo>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <CellTypo variant="h3">PENDING ORDERS</CellTypo>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <CellTypo variant="h3">COMPLETED ORDERS</CellTypo>
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
            padding: "7px 10px",
            "&:hover": {
              backgroundColor: "#0D1A26",
            },
          }}
        >
          <Typography variant="p" className={styles.overDuesBtnText}>
            Overdues
          </Typography>
          <Box className={styles.totalOverduesDiv}>
            <Typography className={styles.totalOverdues} variant="span">
              34
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
export default DailyQueue