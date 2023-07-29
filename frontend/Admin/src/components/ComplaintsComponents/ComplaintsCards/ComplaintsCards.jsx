import { CardDiv } from "@/styledComponents/Card";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../complaints.module.css";
import { bigNumberStyle, headingStyle } from "@/globalStyles/typoStyles";

const ComplaintsCards = ({ cardArray, cwidth, start, end }) => {
  return (
    <CardDiv boxwidth={"100%"} boxheight="200px">
      <Box
        className={
          start === 1 ? `${styles.complaintDiv}` : `${styles.pendingDiv}`
        }
      >
        {cardArray.slice(start, end).map((data, index) => (
          <Box key={index} sx={{ width: { cwidth }, textAlign: "center" }}>
            <Typography
              sx={{ ...headingStyle, fontWeight: "700" }}
              variant="h5"
            >
              {data.name}
            </Typography>
            <Box sx={{ height: "30px" }} />
            <Typography variant="h1" sx={bigNumberStyle}>
              {data.number}
            </Typography>
          </Box>
        ))}
      </Box>
    </CardDiv>
  );
};

export default ComplaintsCards;
