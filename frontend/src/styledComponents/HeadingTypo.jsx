import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const HeadingTypo = styled(Typography)(({fsize}) => ({
    fontFamily: "'Montserrat'",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: fsize ? fsize : "20px",
    lineHeight: "160%",
}));
