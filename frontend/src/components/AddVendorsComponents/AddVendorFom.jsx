import { Box, Typography } from "@mui/material";
import React from "react";

import styles from "./addVendor.module.css";
import Form from "./form";

const AddVendorFom = () => {
  return (
    <Box className={styles.addVendorSection}>
      <Typography variant="h1" className={styles.addVendorTitle}>
        ADD VENDOR
      </Typography>
      <Box className={styles.addVendorForm}>
        <Form />
      </Box>
    </Box>
  );
};

export default AddVendorFom;
