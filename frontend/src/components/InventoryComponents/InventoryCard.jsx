import { bigNumberStyle, headingStyle } from "@/globalStyles/typoStyles";
import { CardDiv, UnitTypo } from "@/styledComponents/Card";
import { Box, Typography } from "@mui/material";
import React from "react";

const InventoryCard = () => {
  const cardArray = [
    {
      name: "Manufactures",
      number: 300,
      unit: "Units",
    },
    {
      name: "Wholesalers",
      number: 200,
      unit: "Units",
    },
    {
      name: "Retailers",
      number: 1,
      unit: "Units",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "60%",
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      {cardArray?.map((data, index) => (
        <CardDiv key={index} boxmrx={"10px"} boxwidth={"24%"}>
          <Typography variant="h5" sx={headingStyle}>
            {data?.name}
          </Typography>
          <Box>
            <Typography variant="h1" sx={bigNumberStyle}>
              {data?.number}
            </Typography>
            <UnitTypo variant="span">{data?.unit}</UnitTypo>
          </Box>
        </CardDiv>
      ))}
    </Box>
  );
};

export default InventoryCard;
