import { StyledButton, StyledReportIcon } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";

import styles from "./DashboardComponents/dashboard.module.css";
import { subHeadingStyle } from "@/globalStyles/typoStyles";
import ReportBtnIcon from "@/assets/svg/reportBtnIcon"

const ReportBtn = () => {
  return (
    <>
      <Box className={styles.reportButton} sx={{ marginTop: "20px" }}>
        <StyledButton
          variant="contained"
          btnwidth={"90%"}
          sx={{ border: "2px solid white" }}
          startIcon={<ReportBtnIcon />}
        >
          <Typography variant="p" sx={subHeadingStyle}>
            Report
          </Typography>
        </StyledButton>
      </Box>
    </>
  );
};

export default ReportBtn;