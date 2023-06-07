import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ImageSlider from "./ImageSlider";

import shoeCarouselimg from "../../../assets/svg/shoeCarouselimg.svg";
import ShoeImg from "../../../assets/svg/img.jpeg";
import shrinkIcon from "../../../assets/svg/shrinkIcon.svg";
import Image from "next/image";
import { expandStyles } from "./ExpandButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "10px",
  outline: "none",
  borderRadius: "10px",
};

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};

const shrinkStyles = {
  position: "absolute",
  top: "35px",
  right: "35px",
  zIndex: 1,
  cursor: "pointer",
};

const ImageSliderModal = (props) => {
  const slides = [
    { url: shoeCarouselimg, title: "beach" },
    { url: ShoeImg, title: "boat" },
    { url: shoeCarouselimg, title: "forest" },
    { url: ShoeImg, title: "city" },
    { url: shoeCarouselimg, title: "italy" },
  ];
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": overlayStyle,
        }}
      >
        <Box sx={style}>
          <ImageSlider slides={slides} modalOpen={true} />
          <Box sx={shrinkStyles}>
            <Image src={shrinkIcon} width="50px" alt="expand" onClick={props.handleClose} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageSliderModal;
