import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

export const StyledSlider = styled(Slider)(({ theme }) => ({
    display: "inline-block",
    width: "120px",
    color: "#0D1A26",
    "& .MuiSlider-thumb": {
      backgroundColor: "#fff",
      border: "2px solid black",
      width: "15px",
      height: "15px",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "transparent",
      border: "2px solid black",
    },
  }));