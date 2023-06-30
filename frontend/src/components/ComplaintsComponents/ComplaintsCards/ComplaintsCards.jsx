import { CardDiv, NumberTypo } from "@/styledComponents/Card";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { Box } from "@mui/material";
import React from "react";
import styles from "../complaints.module.css";

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
            <HeadingTypo fweight={"700"} variant="h5">
              {data.name}
            </HeadingTypo>
            <Box sx={{ height: "30px" }} />
            <NumberTypo variant="h1">{data.number}</NumberTypo>
          </Box>
        ))}
      </Box>
    </CardDiv>
  );
};

export default ComplaintsCards;
