import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTypography = styled(Typography)(({ theme, tcolor }) => ({
  fontWeight: "500",
  color: tcolor ? tcolor : "black",
  fontSize: "14px",
  lineHeight: "20px",
}));
