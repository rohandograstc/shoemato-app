import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../product.module.css";
import uploadCSVIcon from "../../../assets/svg/uploadCSVIcon.svg";
import Image from "next/image";
import UploadCsvModal from "./UploadCsvModal";
import { headingStyle } from "@/globalStyles/typoStyles";

const UploadCsc = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box className={styles.uploadDiv} onClick={handleOpen}>
        <Typography variant="h5" sx={headingStyle}>
          Upload CSV
        </Typography>
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
