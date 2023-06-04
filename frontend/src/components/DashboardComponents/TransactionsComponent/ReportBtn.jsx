import { StyledButton, StyledReportIcon } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

import styles from "../dashboard.module.css";
import UserInfoModal from "./UserInfoModal";

function ReportBtn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className={styles.reportButton}>
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
