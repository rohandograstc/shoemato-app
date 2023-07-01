import { StyledButton, StyledReportIcon } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import React from "react";

import styles from "../dashboard.module.css";

const ReportBtn = () => {

  return (
    <>
      <Box className={styles.reportButton}>
        <StyledButton
          variant="contained"
          startIcon={<StyledReportIcon />}
        >
          <Typography variant="p" className={styles.reportBtnText}>
            Report
          </Typography>
        </StyledButton>
      </Box>
    </>
  );
}

export default ReportBtn;
