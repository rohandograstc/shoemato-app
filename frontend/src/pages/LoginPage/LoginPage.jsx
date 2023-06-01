import Login from '@/components/Login/Login'

import React from 'react'
import LoginImage from '../../assets/LoginPage.svg'
import Image from 'next/image'
import style from '../RegisterPage/RegisterPage.module.css';
import Tologin from '@/components/Register/Tologin';

const LoginPage=()=>{
  return (

    <div className={style.Boxsuper_container}>
      <div className={style.btn} >
        <Tologin className={style.to_login_btn} title1="JOIN"/>
      </div>
      <div className={style.container} style={{flexDirection:"row"}}>
        <Login className={style.page} />
        <Image src={LoginImage} alt='Loadig' className={style.image} />
      </div>
    </div>
  )
}

export default LoginPage;