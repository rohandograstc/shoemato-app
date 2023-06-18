import { Box, Typography } from "@mui/material";
import React from "react";

import styles from "./soloComponents.module.css";

const SoloHead = ({ name }) => {
  return (
    <Box className={styles.soloNavCon}>
      <Box className={styles.soloDetailCon}>
        <Typography variant="h4" className={styles.soloVendorId}>
          Vendor_id
        </Typography>
        <Typography variant="h4" className={styles.soloVendorName}>
          {name}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" className={styles.soloVendorName}>
          Location
        </Typography>
      </Box>
    </Box>
  );
};

export default SoloHead;
