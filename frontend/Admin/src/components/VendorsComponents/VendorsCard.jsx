import { bigNumberStyle, headingStyle } from "@/globalStyles/typoStyles";
import { CardDiv, UnitTypo } from "@/styledComponents/Card";
import { Box, Typography } from "@mui/material";
import React from "react";

const VendorsCard = () => {
  const cardArray = [
    {
      name: "Manufactures",
      number: "30",
    },
    {
      name: "Wholesalers",
      number: "200",
    },
    {
      name: "Retailers",
      number: "1K",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "60%",
        margin: "0 auto",
      }}
    >
      {cardArray?.map((data, index) => (
        <CardDiv key={index} boxmrx={"10px"} boxwidth={"33%"}>
          <Typography variant="h5" sx={headingStyle} >{data?.name}</Typography>
          <Box>
            <Typography variant="h1" sx={bigNumberStyle} >{data?.number}</Typography>
            <UnitTypo variant="span">{data?.unit}</UnitTypo>
          </Box>
        </CardDiv>
      ))}
    </Box>
  );
};

export default VendorsCard;
