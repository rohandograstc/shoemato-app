import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from '@mui/material/colors';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import style from "./Login.module.css";
import Image from "next/image";
import fbIcon from "../../assets/facebook_icon.svg";
import appleIcon from "../../assets/apple_icon.svg";
import googleIcon from "../../assets/google_icon.svg";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    keepLogged: false,
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  return (
    <Box className={style.super_container}>
      <Stack className={style.container}>
        <Stack className={style.box}>
          <Typography variant="h4" className={style.login_title}>
            Login
          </Typography>

          <TextField
            type="text"
            label="Email or Mobile No"
            variant="outlined"
            name="username"
            onChange={handleChange}
            color="primary"
            sx={inputBoxStyle}
          />
          <TextField
            type="password"
            label="Password or OTP"
            variant="outlined"
            name="password"
            onChange={handleChange}
            color="primary"
            sx={inputBoxStyle}
          />
          <Typography
            className={style.desc_text}
            style={{ fontWeight: "600", textDecoration: "underline" }}
          >
            <Link href="#">Forgot your password?</Link>
          </Typography>
          <FormGroup>
            <FormControlLabel
              sx={check_box}
              className={style.desc_text}
              control={
                <Checkbox
                  onChange={() =>
                    setCredentials({
                      ...credentials,
                      ["keepLogged"]: !credentials.keepLogged,
                    })
                  }
                  sx={{ p: 0 }}
                />
              }
              label="Keep me logged in - applies to all log in options below. More info"
            />
          </FormGroup>
          <Stack
            direction="row"
            spacing={3}
            style={{
              margin: "1rem 3rem 2rem 3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Image src={googleIcon} alt="Google" className={style.icons} />
            </Box>
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Image src={appleIcon} alt="Apple" className={style.icons} />
            </Box>
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Image src={fbIcon} alt="FB" className={style.icons} />
            </Box>
          </Stack>
          <Stack>
            <ThemeProvider theme={theme}>
              <Button
                color="primary"
                variant="contained"
                endIcon={<ArrowForwardIcon style={{ fontSize: "14px" }} />}
                sx={{ display: "flex", justifyContent: "space-between" }}>
                EMAIL LOGIN
              </Button>
            </ThemeProvider>
          </Stack>
          <Typography className={style.desc_text} style={{ marginTop: "1rem" }}>
            <Link href='#' style={{textDecoration:'none'}}>Terms And Conditions</Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

const check_box = {
  gap: 1,
  "& .MuiFormControlLabel-root": {
    padding: 0.2,
  },
  "& .MuiTypography-root": {
    fontSize: 14,
    margin: 0.2,
    fontWeight: 550,
  },
  "& .MuiSvgIcon-root": {
    color: "#000000",
  },
};

const inputBoxStyle = {
  "& .MuiInputBase-root": {
    height: 50,
    my: 1,
    borderRadius: 2,
    fontSize: 16,
  },
  "& .MuiInputLabel-root": {
    pt: 1,
    fontSize: 12,
  },
};
const btn_text = {
  "& .MuiButton-root": {
    justifyContent: "flex-start",
    margin: 0.1,
    fontWeight: 550,
    color: "#000000",
    backgroundColor: "#000000",
  },
  "& .MuiTouchRipple-root": {
    color: "#000000",
    backgroundColor: "#000000",
  },
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[900],
    },
  },
});

export default Login;
