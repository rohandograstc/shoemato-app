import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ReportIcon from "@mui/icons-material/Report";

export const StyledButton = styled(Button)(
    ({ btnwidth, btnradius, bgcolor, tcolor }) => ({
      backgroundColor: bgcolor ? bgcolor : "#0D1A26",
      borderRadius: btnradius ? btnradius : "24px",
      padding: "7px 10px",
      width: btnwidth ? btnwidth : "100%",
      marginBottom: "4px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: bgcolor ? bgcolor : "#0D1A26",
      },
      color: tcolor ? tcolor : "white",
    })
  );
  
  export const StyledReportIcon = styled(ReportIcon)(({ theme }) => ({
    borderRadius: "100%",
  }));