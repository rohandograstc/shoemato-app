import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ImageSlider from "./ImageSlider";
import shrinkIcon from "../../../../assets/svg/shrinkIcon.svg";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: "10px",
  outline: "none",
  borderRadius: "10px",
};

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};

const shrinkStyles = {
  position: "absolute",
  top: "20px",
  right: "20px",
  zIndex: 1,
  cursor: "pointer",
};

const ImageSliderModal = (props) => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "beach",
    },
    {
      url: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
      title: "boat",
    },
    {
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "forest",
    },
    {
      url: "https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg",
      title: "city",
    },
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
            <Image
              src={shrinkIcon}
              style={{ width: "17px", height: "17px" }}
              alt="shrink"
              onClick={props.handleClose}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ImageSliderModal;
