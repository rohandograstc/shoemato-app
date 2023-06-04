import React from "react";
import RegisterImage from "../../assets/RegisterPage.svg";
import Image from "next/image";
import Register from "@/components/Register/Register";
import {Stack} from "@mui/material";
import style from '../Global.module.css'

const RegisterPage = () => {
  return (
    <Stack direction="row">
      <Image src={RegisterImage} className={style.entryImg} alt=""></Image>
      <Register />
    </Stack>
  );
};

export default RegisterPage;
