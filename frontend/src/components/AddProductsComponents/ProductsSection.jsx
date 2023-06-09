import React from "react";
import Image from "next/image";

import { Box } from "@mui/material";

import styles from "./addproducts.module.css";

import dragIcon from "../../assets/svg/dragIcon.svg";
import shoeCarouselimg from "../../assets/svg/shoeCarouselimg.svg";
import ShoeImg from "../../assets/svg/img.jpeg";

import { CellTypo } from "@/styledComponents/CellTypo";
import ProductsView from "./SubComponents/ProductsSectionComp/ProductsView";
import ImageSlider from "./SubComponents/ProductsSectionComp/ImageSlider";

const ProductsSection = () => {
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
