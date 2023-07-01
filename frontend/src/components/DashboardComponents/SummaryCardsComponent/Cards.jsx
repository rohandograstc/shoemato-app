import { Box } from "@mui/material";
import React, { useState } from "react";
import styles from "../dashboard.module.css";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { CardDiv, NumberTypo, UnitTypo } from "@/styledComponents/Card";
import UserInfoModal from "../TransactionsComponent/UserInfoModal";

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
            <HeadingTypo variant="h5">{data.name}</HeadingTypo>
            <Box>
              <NumberTypo variant="h1">{data.number}</NumberTypo>
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
