
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const BorderLinearProgress = styled(LinearProgress)(({ bg, value }) => ({
    height: 13,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "transparent",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: bg ? bg : "#FE9496",
    },
  }));