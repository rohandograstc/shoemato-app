
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";


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