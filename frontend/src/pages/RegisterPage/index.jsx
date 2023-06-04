import React from "react";
import RegisterImage from "../../assets/RegisterPage.svg";
import Image from "next/image";
import Register from "@/components/Register/Register";
import { Stack, Box } from "@mui/material";
import style from "../Global.module.css";
import Link from 'next/link'

const RegisterPage = () => {
  return (
    <>
      <Box
        className={style.loginBtn}
        onClick={() => {
          document.querySelector("#chkbox").click();
        }}
      >
        <Link id="chkbox" href="/LoginPage"></Link>
      </Box>
      <Stack direction="row">
        <Image src={RegisterImage} className={style.entryImg} alt=""></Image>
        <Register />
      </Stack>
    </>
  );
};

export default RegisterPage;
