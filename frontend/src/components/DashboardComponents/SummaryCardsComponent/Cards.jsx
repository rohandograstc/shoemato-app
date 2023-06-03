import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../dashboard.module.css";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { CardDiv, NumberTypo, UnitTypo } from "@/styledComponents/Card";

const Cards = ({ cardArray }) => {
  return (
    <Box component="div" className={styles.cardContainer}>
      {cardArray?.map((data, index) => (
        <CardDiv key={index} boxmrx={index % 2 === 0 && "10px"} >
          <HeadingTypo variant="h5" >
            {data.name}
          </HeadingTypo>
          <Box>
            <NumberTypo variant="h1">{data.number}</NumberTypo>
            <UnitTypo variant="span">{data.unit}</UnitTypo>
          </Box>
        </CardDiv>
      ))}
    </Box>
  );
};

export default Cards;
