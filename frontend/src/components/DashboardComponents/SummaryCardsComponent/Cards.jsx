import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../dashboard.module.css";
import { CardDiv, UnitTypo } from "@/styledComponents/Card";
import UserInfoModal from "../TransactionsComponent/UserInfoModal";
import { bigNumberStyle, headingStyle } from "@/globalStyles/typoStyles";

const Cards = ({ cardArray }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box component="div" className={styles.cardContainer}>
        {cardArray?.map((data, index) => (
          <CardDiv
            key={index}
            boxmrx={index % 2 === 0 && "10px"}
            onClick={handleOpen}
          >
            <Typography variant="h5" sx={headingStyle}>
              {data.name}
            </Typography>
            <Box>
              <Typography variant="h1" sx={bigNumberStyle}>
                {data.number}
              </Typography>
              <UnitTypo variant="span">{data.unit}</UnitTypo>
            </Box>
          </CardDiv>
        ))}
      </Box>
      <UserInfoModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Cards;
