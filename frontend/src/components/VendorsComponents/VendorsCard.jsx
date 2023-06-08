import { CardDiv, NumberTypo, UnitTypo } from "@/styledComponents/Card";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { Box } from "@mui/material";
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

export default VendorsCard;
