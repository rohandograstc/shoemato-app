import React, { useState } from "react";
import Image from "next/image";

import { Box } from "@mui/material";

import expandImage from "../../../../assets/svg/expandImage.svg";
import ImageSliderModal from "../ProductsSectionComp/ImageSliderModal";

const expandStyles = {
  position: "absolute",
  top: "22px",
  right: "26px",
  zIndex: 1,
  cursor: "pointer",
};

const ExpandButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={expandStyles}>
        <Image src={expandImage} alt="expand" onClick={handleOpen} />
      </Box>
      <ImageSliderModal open={open} handleClose={handleClose} />
    </>
  );
};

export default ExpandButton;
