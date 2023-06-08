import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const CellTypo = styled(Typography)(({fsize, fcolor, fheight, fweight, ffont}) => ({
    fontFamily: ffont ? ffont : "'DM Sans'",
    fontStyle: "normal",
    fontWeight: fweight ? fweight : "400",
    fontSize: fsize ? fsize : "12px",
    lineHeight: fheight ? fheight : "16px",
    color : fcolor ? fcolor : "black"
}));
