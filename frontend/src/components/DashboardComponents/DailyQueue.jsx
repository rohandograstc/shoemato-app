import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";
import { StyledSlider } from "@/styledComponents/StyledSlider";
import Link from "next/link";
import { headingStyle, paraStyle, subHeadingStyle } from "@/globalStyles/typoStyles";

const DailyQueue = () => {
  return (
    <Box className={styles.dailyQueueContainer}>
      <Typography
        variant="h5"
        sx={{ paddingLeft: "10px", marginBottom: "10px", ...headingStyle }}
      >
        Daily Queue
      </Typography>
      <Box className={styles.dailyQueueOptionContainer}>
        <Typography variant="h3" sx={paraStyle} >TOTAL ORDERS</Typography>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Typography variant="h3" sx={paraStyle}>PENDING ORDERS</Typography>
        <StyledSlider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
        <Typography variant="h3" sx={paraStyle}>COMPLETED ORDERS</Typography>
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
          <Link
            href={"/dashboard/overtime"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="p" sx={{margin:"0 10px", ...subHeadingStyle, fontFamily:"Montserrat"}} >
              Overdues
            </Typography>
          </Link>
          <Box className={styles.totalOverduesDiv}>
            <Typography className={styles.totalOverdues} variant="span">
              34
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
export default DailyQueue;
