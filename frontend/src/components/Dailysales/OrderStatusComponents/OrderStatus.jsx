import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Typography, Stack, TextField, Button } from "@mui/material";
import Link from "next/link";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import style from "@/components/Dailysales/Dailysales.module.css";
import Carousel from "@/components/Dailysales/OrderStatusComponents/Carousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const muiTheme = createTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        color: "#000000", // or 'rgba(0, 0, 0, 1)'

        "&$completed": {
          color: "green",
        },
      },
    },
  },
});

const steps = ["Confirmed", "Processed", "Dispatched", "Delivery", "Delivered"];

export default function ({ details, setDetails }) {
  const [edit, setEdit] = useState(true);

  return (
    <Stack direction="column" sx={{ py: 0.5, px: 2 }}>
      <HeadingTypo variant="h5" style={{ paddingLeft: "48px" }}>
        Order {details.orderId}
      </HeadingTypo>
      <Stack direction="row">
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pl: 5,
          }}
        >
          <Carousel />
          <Typography
            variant="p"
            sx={{ width: "375px", textAlign: "center", mt: "10%", fontFamily: 'Montserrat',}}
          >
            Agent Details
          </Typography>
          <Typography variant="p" sx={{ width: "375px", textAlign: "center", fontFamily: 'Montserrat' }}>
            Seller Details
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            id="outlined-basic"
            label="Product Name*"
            sx={inputBoxStyle}
            variant="outlined"
            className={style.input}
            name="fname"
            disabled={edit}
          />
          <TextField
            id="outlined-basic"
            label="Category"
            sx={inputBoxStyle}
            variant="outlined"
            className={style.input}
            name="fname"
            disabled={edit}
          />
          <TextField
            id="outlined-basic"
            label="Product ID"
            sx={inputBoxStyle}
            variant="outlined"
            className={style.input}
            name="fname"
            disabled={edit}
          />
          <TextField
            id="outlined-basic"
            label="Product Tax"
            sx={inputBoxStyle}
            variant="outlined"
            className={style.input}
            name="fname"
            disabled={edit}
          />
          <TextField
            id="outlined-basic"
            label="Amount"
            sx={inputBoxStyle}
            variant="outlined"
            className={style.input}
            name="fname"
            disabled={edit}
          />

          <HeadingTypo variant="h6" style={{ marginTop: "30px" }}>
            Status
          </HeadingTypo>
          <ThemeProvider theme={muiTheme}>
            <Stepper
              activeStep={2}
              alternativeLabel
              sx={{
                width: "70%",
                pl: 0,
                ml: "15%",
                color: 'success',
              }}
            >
              {steps.map((label) => (
                <Step key={label} sx={{"& .Mui-completed, & .Mui-active":{ "& .MuiSvgIcon-root":{color:'#1BCFB4'}}}}>
                  <StepLabel sx={{fontFamily: 'Montserrat', fontWeight:'100'}}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </ThemeProvider>
          <HeadingTypo
            variant="h1"
            style={{
              textAlign: "center",
              marginTop: "40px",
              fontSize: "30px",
              color: "#C10004",
            }}
          >
            CANCELLED
          </HeadingTypo>
          <HeadingTypo
            variant="h1"
            style={{
              textAlign: "center",
              marginTop: "5px",
              fontSize: "30px",
              color: "#C10004",
            }}
          >
            RETURNED
          </HeadingTypo>
        </Box>
      </Stack>
      <Link href="" style={link} onClick={() => setDetails({ show: true })}>
        Back
      </Link>
      <Button
        startIcon={<EditOutlinedIcon />}
        variant="contained"
        onClick={() => setEdit(false)}
        sx={{
          backgroundColor: "#0D1A26",
          borderRadius: "24px",
          padding: "7px 10px",
          "&:hover": {
            backgroundColor: "#0D1A26",
          },
          width: "90px",
          position: "absolute",
          right: "30px",
          bottom: "30px",
        }}
      >
        <Typography
          variant="p"
          className={style.edit}
          sx={{ fontWeight: "100" }}
        >
          EDIT
        </Typography>
      </Button>
    </Stack>
  );
}

const link = {
  "text-decoration": "none",
  color: "#0D1A26",
  "margin-top": "100px",
};

const inputBoxStyle = {
  mx: 1,
  my: 0.5,
  "& .MuiInputBase-root": {
    height: 35,
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
    pt: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Montserrat",
  },
};
