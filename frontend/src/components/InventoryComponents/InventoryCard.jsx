import { CardDiv, NumberTypo, UnitTypo } from "@/styledComponents/Card";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { Box } from "@mui/material";
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
      }}
    >
      {cardArray?.map((data, index) => (
        <CardDiv key={index}  boxmrx={"10px"}>
          <HeadingTypo variant="h5">{data?.name}</HeadingTypo>
          <Box>
            <NumberTypo variant="h1">{data?.number}</NumberTypo>
            <UnitTypo variant="span">{data?.unit}</UnitTypo>
          </Box>
        </CardDiv>
      ))}
    </Box>
  );
};

export default InventoryCard;
