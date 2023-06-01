import Login from '@/components/Login/Login'

import React from 'react'
import Img from '../../assets/shoemato_img.png'
import Image from 'next/image'
import Stack from '@mui/joy/Stack';
import { Box } from '@mui/material';
import style from '../RegisterPage/RegisterPage.module.css';
import Tologin from '@/components/Register/Tologin';

function LoginPage() {
  return (

    <div className={style.Boxsuper_container}>
      <div className={style.btn} >
        <Tologin className={style.to_login_btn} title1="JOIN"/>
      </div>
      <div className={style.container} style={{flexDirection:"row"}}>
        <Login className={style.page} />
        <Image src={Img} alt='Loadig' className={style.image} />
      </div>
    </div>
  )
}

export default LoginPage