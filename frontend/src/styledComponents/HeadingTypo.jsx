import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const HeadingTypo = styled(Typography)(({fsize, fweight, ffamily}) => ({
    fontFamily: ffamily ? ffamily : "'Montserrat'",
    fontStyle: "normal",
    fontWeight: fweight ? fweight : "600",
    fontSize: fsize ? fsize : "20px",
    lineHeight: "160%",
}));
