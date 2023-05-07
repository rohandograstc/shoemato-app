// Components - Drawer, AppBar Styled Components, Vendors,  Daily Queue, Brand Name

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Slider from "@mui/material/Slider";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import ReportIcon from "@mui/icons-material/Report";

//Drawer

const drawerWidth = 203;

const openedMixin = (theme) => ({
  width: drawerWidth,
  [theme.breakpoints.up("xl")]: {
    width: 240,
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginTop: theme.spacing(2.5),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: "#0D1A26",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: "#0D1A26",
    },
  }),
}));

// AppBar Styled Components

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md", "xl")]: {
    marginLeft: theme.spacing(3),
    width: "500px",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  top: "0px",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme, searchwidth }) => ({
  color: "black",
  backgroundColor: "white",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: searchwidth ? searchwidth : "400px",
    },
    "::placeholder": {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "160%",
    },
  },
}));

// Vendors

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

// Daily Queue

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

// Brand Name

export const StyledButton = styled(Button)(
  ({ btnwidth, btnradius, bgcolor, tcolor }) => ({
    backgroundColor: bgcolor ? bgcolor : "#0D1A26",
    borderRadius: btnradius ? btnradius : "24px",
    padding: "7px 10px",
    width: btnwidth ? btnwidth : "100%",
    marginBottom: "4px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: bgcolor ? bgcolor : "#0D1A26",
    },
    color: tcolor ? tcolor : "white",
  })
);

export const StyledReportIcon = styled(ReportIcon)(({ theme }) => ({
  borderRadius: "100%",
}));
