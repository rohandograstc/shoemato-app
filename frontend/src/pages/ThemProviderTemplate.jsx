import React, { useContext } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Login from "@/components/Login/Login";
import Register from "@/components/Register/Register";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { ThemeContext } from "./Context/Theme";

const App = () => {
  const { dark } = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: dark ? "#c0cdd8" : "#445B6E",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 1250,
        lg: 1500,
        xl: 1920,
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Login />
        <Register />
      </ThemeProvider>
    </div>
  );
};

export default App;
