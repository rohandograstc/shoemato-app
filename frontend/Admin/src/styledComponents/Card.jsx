import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const CardDiv = styled(Box)(({ boxmrx, boxheight, boxwidth }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  width: boxwidth ? boxwidth : "48%",
  height: boxheight ? boxheight : "180px",
  background: "#ffffff",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  paddingTop: "10px",
  position: "relative",
  marginRight: boxmrx ? boxmrx : "0px",
}));

export const NumberTypo = styled(Typography)(({ fsize, fWeight, fheight }) => ({
  fontFamily: "Open Sans",
  fontWeight: fWeight ? fWeight : "700",
  fontSize: fsize ? fsize : "64px",
  lineHeight: fheight ? fheight : "87px",
  display: "inline-block",
  marginRight: "10px",
  marginTop: "10px",
  color: "#000000",
}));

export const UnitTypo = styled(Typography)(({ fweight, fsize, fheight }) => ({
  fontWeight: fweight ? fweight : "400",
  fontSize: fsize ? fsize : "27px",
  lineHeight: fheight ? fheight : "140%",
  position: "absolute",
  right: "10px",
  bottom: 0,
}));
