import React from 'react'
import style from './RegisterPage.module.css'
import RegisterImage from '../../assets/RegisterPage.svg'
import Image from 'next/image'
import Register from '@/components/Register/Register';
import Tologin from '@/components/Register/Tologin';
const RegisterPage=()=>{
  return (
    <div className={style.Boxsuper_container}>
      <div className={style.btn}>
        <Tologin className={style.to_login_btn} title1="LOGIN"/>
      </div>
      <div className={style.container}>
        <Register className={style.page} />
        <Image src={RegisterImage} alt='Loadig' className={style.image} />
      </div>
    </div>

  )
}

export default RegisterPage;