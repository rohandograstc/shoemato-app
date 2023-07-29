import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ReportIcon from "@mui/icons-material/Report";

export const StyledButton = styled(Button)(
    ({ btnwidth, btnradius, bgcolor, tcolor, btnpad, boxShdw,btnmrb}) => ({
      backgroundColor: bgcolor ? bgcolor : "#0D1A26",
      borderRadius: btnradius ? btnradius : "24px",
      padding: btnpad ? btnpad : "7px 10px",
      width: btnwidth ? btnwidth : "100%",
      marginBottom: btnmrb ? btnmrb : "4px",
      textTransform: "none",
      "&:hover": {
        backgroundColor: bgcolor ? bgcolor : "#0D1A26",
      },
      color: tcolor ? tcolor : "white",
      boxShadow: boxShdw ? boxShdw : 'none',
    })
  );
  
  export const StyledReportIcon = styled(ReportIcon)(({ theme }) => ({
    borderRadius: "100%",
  }));