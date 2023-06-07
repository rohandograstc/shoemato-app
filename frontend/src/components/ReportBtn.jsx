import { StyledButton, StyledReportIcon } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import styles from "./DashboardComponents/dashboard.module.css";
import UserInfoModal from "./DashboardComponents/TransactionsComponent/UserInfoModal";

const ReportBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className={styles.reportButton} sx={{ marginTop: "20px" }}>
        <StyledButton
          variant="contained"
          onClick={handleOpen}
          startIcon={<StyledReportIcon />}
        >
          <Typography variant="p" className={styles.reportBtnText}>
            Report
          </Typography>
        </StyledButton>
      </Box>
      <UserInfoModal open={open} handleClose={handleClose} />
    </>
  );
}

export default ReportBtn;
