import { Box } from "@mui/material";
import { useState } from "react";
import shoeCarouselimg from "../../../../assets/svg/shoeCarouselimg.svg";
import ShoeImg from "../../../../assets/svg/img.jpeg";

import LeftArrowKeyIcon from "@/assets/svg/leftArrowKey";
import RightArrowKeyIcon from "@/assets/svg/rightArrowKey";

import styles from "../../addproducts.module.css";
import ExpandButton from "../ProductFormComp/ExpandButton";

const sliderStyles = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const ImageSlider = ({ slides, modalOpen }) => {
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
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const carouselConStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    borderRadius: modalOpen ? "10px 10px 0 0" : "10px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "5px",
  };

  return (
    <Box sx={sliderStyles}>
      {!modalOpen && <ExpandButton />}
      <Box className={styles.carouselCon} style={carouselConStyle} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "10px",
        }}
      >
        <Box onClick={goToPrevious} sx={{ cursor: "pointer" }}>
          <LeftArrowKeyIcon />
        </Box>
        <Box onClick={goToNext} sx={{ cursor: "pointer" }}>
          <RightArrowKeyIcon />
        </Box>
      </Box>
      {!modalOpen && (
        <Box className={styles.colorDiv}>
          <Box
            className={`${styles.divDot} ${styles.redcol}`}
            onClick={() => goToSlide(0)}
          />
          <Box
            className={`${styles.divDot} ${styles.yellowcol}`}
            onClick={() => goToSlide(1)}
          />
          <Box
            className={`${styles.divDot} ${styles.graycol}`}
            onClick={() => goToSlide(2)}
          />
          <Box
            className={`${styles.divDot} ${styles.blackcol}`}
            onClick={() => goToSlide(3)}
          />
        </Box>
      )}
    </Box>
  );
};

export default ImageSlider;
