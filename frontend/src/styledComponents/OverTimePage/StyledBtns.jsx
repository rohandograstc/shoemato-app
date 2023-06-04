import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBtns = styled(Button)(({ theme, btncolor, btnradius, btnborder }) => ({
  backgroundColor: btncolor ? btncolor : "#0D1A261A",
  border: btnborder ? btnborder : "1px solid #0D1A26",
  borderRadius: btnradius ? btnradius : "100px 0px 0px 100px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: btncolor ? btncolor : "#0D1A261A",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
