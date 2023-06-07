import React from "react";
import Image from "next/image";

import { Box } from "@mui/material";

import styles from "./addproducts.module.css";

import dragIcon from "../../assets/svg/dragIcon.svg";
import shoeCarouselimg from "../../assets/svg/shoeCarouselimg.svg";
import ShoeImg from "../../assets/svg/img.jpeg"

import { CellTypo } from "@/styledComponents/CellTypo";
import ProductsView from "./ProductsView";
import ImageSlider from "./SubComponents/ImageSlider";

const ProductsSection = () => {
  const slides = [
    { url: shoeCarouselimg, title: "beach" },
    { url: ShoeImg, title: "boat" },
    { url: shoeCarouselimg, title: "forest" },
    { url: ShoeImg, title: "city" },
    { url: shoeCarouselimg, title: "italy" },
  ];

  return (
    <Box className={styles.productsSection}>
      <Box className={styles.carouseCon}>
        <ImageSlider slides={slides} />
      </Box>
      
      <Box className={styles.dragDropDiv}>
        <Image height="71px" width="71px" alt="dragnDropIcon" src={dragIcon} />
        <CellTypo variant="span" fheight={"140%"} fsize={"23px"}>
          Drag & Drop
        </CellTypo>
      </Box>
      <Box className={styles.productViewSection}>
        <ProductsView viewName={"Side"} />
        <ProductsView viewName={"Top"} />
        <ProductsView viewName={"Bottom"} />
      </Box>
    </Box>
  );
};

export default ProductsSection;
