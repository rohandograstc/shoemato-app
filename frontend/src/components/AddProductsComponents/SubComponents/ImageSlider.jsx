import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import LeftArrowKeyIcon from "@/assets/svg/leftArrowKey";
import RightArrowKeyIcon from "@/assets/svg/rightArrowKey";
import expandImage from "../../../assets/svg/expandImage.svg";

import styles from "../addproducts.module.css";

const expandStyles = {
  position: "absolute",
  top: "22px",
  right: "26px",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  bottom: "28px",
  right: "35%",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  bottom: "28px",
  right: "60%",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box sx={sliderStyles}>
      <Box>
        <Box onClick={goToPrevious} sx={leftArrowStyles}>
          <LeftArrowKeyIcon />
        </Box>
        <Box onClick={goToNext} sx={rightArrowStyles}>
          <RightArrowKeyIcon />
        </Box>
      </Box>
      <Box sx={expandStyles}>
        <Image src={expandImage} alt="expand" />
      </Box>
      <Box className={styles.carouseCon}>
        <Image
          alt="image"
          src={slides[currentIndex].url}
          className={styles.carouselImage}
        />
      </Box>
    </Box>
  );
};

export default ImageSlider;
