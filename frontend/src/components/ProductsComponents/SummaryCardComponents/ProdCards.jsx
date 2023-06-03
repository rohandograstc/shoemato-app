import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../product.module.css";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import UploadCsc from "./UploadCsc";

const ProdCards = ({ cardArray, uploadCSV }) => {
  return (
    <Box component="div" className={styles.prodCardContainer}>
      {cardArray?.map((data, index) => (
        <Box
          key={index}
          className={
            uploadCSV === false
              ? `${styles.prodCardDiv} ${styles.prodBigCardDiv}`
              : `${styles.prodCardDiv}`
          }
        >
          <HeadingTypo variant="h5">{data.name}</HeadingTypo>
          <Box>
            <Typography
              variant="h1"
              className={
                uploadCSV === true
                  ? `${styles.prodcardValue}`
                  : `${styles.prodcardValue} ${styles.prodBigcardValue}`
              }
            >
              {data.number}
            </Typography>
            <Typography
              variant="span"
              className={
                uploadCSV === true && index === 1
                  ? `${styles.prodcardValueUnit} ${styles.prodBoldcardValueUnit}`
                  : `${styles.prodcardValueUnit} `
              }
            >
              {data.unit}
            </Typography>
          </Box>
        </Box>
      ))}
      {uploadCSV && <UploadCsc />}
    </Box>
  );
};

export default ProdCards;
