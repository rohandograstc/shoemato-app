import { Box } from "@mui/material";
import React, { useState } from "react";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import styles from "../product.module.css";
import uploadCSVIcon from "../../../assets/svg/uploadCSVIcon.svg";
import Image from "next/image";
import UploadCsvModal from "./UploadCsvModal";

const UploadCsc = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box className={styles.uploadDiv} onClick={handleOpen}>
        <HeadingTypo variant="h5">Upload CSV</HeadingTypo>
        <Image
          src={uploadCSVIcon}
          alt="uploadCSVIcon"
          className={styles.uploadIcon}
        />
      </Box>
      <UploadCsvModal open={open} handleClose={handleClose} />
    </>
  );
};

export default UploadCsc;
