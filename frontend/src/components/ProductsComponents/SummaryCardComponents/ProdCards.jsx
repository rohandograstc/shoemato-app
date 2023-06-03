import { Box} from "@mui/material";
import React from "react";
import styles from "../product.module.css";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import UploadCsc from "./UploadCsc";
import { CardDiv, NumberTypo, UnitTypo } from "@/styledComponents/Card";

const ProdCards = ({ cardArray, uploadCSV }) => {
  return (
    <Box component="div" className={styles.prodCardContainer}>
      {cardArray?.map((data, index) => (
        <CardDiv
          key={index}
          boxwidth = {"99%"}
          boxheight = { uploadCSV === false ? "165px" : "130px"}
        >
          <HeadingTypo variant="h5">{data.name}</HeadingTypo>
          <Box>
            <NumberTypo
              variant="h1"
              fsize={ uploadCSV === true && "50px"}
              fheight={ uploadCSV === true && "68px"}
            >
              {data.number}
            </NumberTypo>
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
