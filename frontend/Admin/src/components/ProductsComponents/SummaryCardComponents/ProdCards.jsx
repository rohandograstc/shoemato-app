import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../product.module.css";
import UploadCsc from "./UploadCsc";
import { CardDiv, UnitTypo } from "@/styledComponents/Card";
import { bigNumberStyle, headingStyle } from "@/globalStyles/typoStyles";

const ProdCards = ({ cardArray, uploadCSV }) => {
  return (
    <Box component="div" className={styles.prodCardContainer}>
      {cardArray?.map((data, index) => (
        <CardDiv
          key={index}
          boxwidth={"99%"}
          boxheight={uploadCSV === false ? "165px" : "130px"}
        >
          <Typography variant="h5" sx={headingStyle}>
            {data.name}
          </Typography>
          <Box>
            <Typography
              variant="h1"
              sx={{
                ...bigNumberStyle,
                fontSize: uploadCSV === true && "50px",
                lineHeight: uploadCSV === true && "68px",
              }}
            >
              {data.number}
            </Typography>
            <UnitTypo
              variant="span"
              fweight={uploadCSV === true && index === 1 && "700"}
              fsize={uploadCSV === true && index === 1 && "34px"}
              fheight={uploadCSV === true && index === 1 && "46px"}
            >
              {data.unit}
            </UnitTypo>
          </Box>
        </CardDiv>
      ))}
      {uploadCSV && <UploadCsc />}
    </Box>
  );
};

export default ProdCards;
