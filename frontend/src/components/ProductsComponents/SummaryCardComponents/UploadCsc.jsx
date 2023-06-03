import { Box } from '@mui/material'
import React from 'react'
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import styles from "../product.module.css";
import uploadCSVIcon from "../../../assets/svg/uploadCSVIcon.svg"
import Image from 'next/image';
const UploadCsc = () => {
  return (
    <Box className={styles.uploadDiv}>
      <HeadingTypo variant='h5' >Upload CSV</HeadingTypo>
      <Image src={uploadCSVIcon} alt="uploadCSVIcon" className={styles.uploadIcon} />
    </Box>
  )
}

export default UploadCsc
