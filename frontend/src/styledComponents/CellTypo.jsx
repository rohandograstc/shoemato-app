import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const CellTypo = styled(Typography)(({fsize}) => ({
    fontFamily: "'DM Sans'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: fsize ? fsize : "12px",
    lineHeight: "16px",
}));
