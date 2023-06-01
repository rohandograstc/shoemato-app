import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import style from './RegisterPage.module.css'
import Img from '../../assets/Register.png'
import Stack from '@mui/joy/Stack';
import Image from 'next/image'
// import Register from '../../components/Register/Register'
import Register from '@/components/Register/Register';
import Tologin from '@/components/Register/Tologin';
function RegisterPage() {
  return (
    <div className={style.Boxsuper_container}>
      <div className={style.btn}>
        <Tologin className={style.to_login_btn} title1="LOGIN"/>
      </div>
      <div className={style.container}>
        <Register className={style.page} />
        <Image src={Img} alt='Loadig' className={style.image} />
      </div>
    </div>

  )
}

export default RegisterPage