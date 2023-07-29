import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import style from "./Register.module.css";
import fbIcon from "../../assets/facebook_icon.svg";
import appleIcon from "../../assets/apple_icon.svg";
import googleIcon from "../../assets/google_icon.svg";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Link from "next/link";

const Register = ({ setEnter }) => {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    code: "+91",
    phone: "",
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };
  return (
    <>
      <Box className={style.container}>
        <Stack className={style.box}>
          <Typography variant="h4" className={style.title}>Register</Typography>

          <Typography className={style.title_signup}>Sign up with</Typography>

          <Stack
            direction="row"
            spacing={3}
            style={{
              margin: "1rem 0rem",
              display: "flex",
              alignItems: "center",
              width: "75%",
              justifyContent: "space-evenly",
            }}
          >
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Link href="#" className={style.icons}>
                <Image src={fbIcon} alt="FB" className={style.icons} />
              </Link>
            </Box>
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Link href="#" className={style.icons}>
                <Image src={googleIcon} alt="Google" className={style.icons} />
              </Link>
            </Box>
            <Box boxShadow={3} borderRadius="50%" className={style.card}>
              <Link href="#">
                <Image src={appleIcon} alt="Apple" className={style.icons} />
              </Link>
            </Box>
          </Stack>

          <span className={style.divider} />

          <Typography className={style.title2}>User Details</Typography>

          <Stack className={style.user_detail2}>
            <TextField
              id="outlined-basic"
              label="First Name"
              sx={inputBoxStyle}
              variant="outlined"
              className={style.input}
              name="fname"
              onChange={handleChange}
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              sx={inputBoxStyle}
              variant="outlined"
              className={style.input}
              name="lname"
              onChange={handleChange}
            />
          </Stack>

          <Stack className={style.user_detail2}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              sx={code}
              onChange={handleChange}
              name="code"
              value={userData.code}
            >
              {country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>

            <TextField
              id="outlined-basic"
              label="Phone Number"
              className={style.phone}
              sx={inputBoxStyle}
              type="phonenumber"
              variant="outlined"
              onChange={handleChange}
              name="phone"
            />
            <TextField
              className={style.role}
              sx={inputBoxStyle}
              id="outlined-basic"
              variant="outlined"
              select
              label="Role"
              onChange={handleChange}
              name="role"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <div className={style.withEmail}>
            <Typography className={style.title2}>SignUp Details :</Typography>
            <Stack>
              <TextField
                type="text"
                label="Email"
                variant="outlined"
                name="email"
                color="primary"
                sx={inputBoxStyle}
                onChange={handleChange}
              />
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                name="password"
                color="primary"
                sx={inputBoxStyle}
                onChange={handleChange}
              />
              <Typography
                className={style.desc_text}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: 10,
                    lineHeight: 0,
                  },
                }}
              >
                Minimum 8 characters with at least one uppercase, one lowercase,
                one special character and a number
              </Typography>
            </Stack>
            <div>
              <FormGroup
                sx={{
                  "& .MuiFormGroup-root": {
                    marginTop: 1,
                    marginBottom: 2,
                  },
                }}
              >
                <FormControlLabel
                  className={style.desc_text}
                  sx={check_box}
                  control={<Checkbox />}
                  label="T&C Compulsory"
                />
                <FormControlLabel
                  className={style.desc_text}
                  sx={check_box}
                  control={<Checkbox />}
                  label="Optional T&C"
                />
              </FormGroup>
            </div>
            <Stack>
              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForwardIcon style={{ fontSize: "14px" }} />}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: 40,
                    mt: 2,
                  }}
                  onClick={() => setEnter(true)}
                >
                  REGISTER
                </Button>
              </ThemeProvider>
            </Stack>
          </div>
        </Stack>
      </Box>
    </>
  );
};

//input box css started here
const inputBoxStyle = {
  "& .MuiInputBase-root": {
    height: 42,
    my: 1,
    borderRadius: 2,
    fontSize: 16,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
  },
  "& .MuiInputLabel-root": {
    pt: 0.4,
    fontSize: 12,
  },
};


//mobile country code dorpdown css started here
const code = {
  height: 45,
  m: "auto",
  pl: 1,
  width: 65,
  borderRadius: 1.8,
  "& MuiSelect-icon": {
    overflow: "visible",
  },
  "& fieldset": {
    borderColor: "black",
  },
  "& .MuiInputBase-input": {
    p: 0.1,
    fontSize: 14,
    overflow: "visible",
  },
  "& .MuiSelect-select": {
    overflow: "inherit",
  },
  "& .MuiSvgIcon-root": {
    right: 0,
    height: 0.5,
    width: 0.4,
    p: 0,
    overflow: "visible",
  },
  "& .MuiSelect-outlined": {
    overflow: "visible",
  },
};

//checkbox css started here
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
//checkbox css end here

const currencies = [
  {
    value: "1",
    label: "Manufacturer",
  },
  {
    value: "2",
    label: "WholeSeller",
  },
  {
    value: "3",
    label: "Retailer",
  },
  {
    value: "4",
    label: "Customer",
  },
];

const country = [
  {
    value: "+91",
    label: "+91",
  },
  {
    value: "+11",
    label: "+11",
  }
];

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[900],
    },
  },
});

export default Register;
