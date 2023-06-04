import Login from '../../components/Login/Login'
import LoginImage from '../../assets/LoginPage.svg'
import Image from 'next/image'
import {Stack} from "@mui/material";
import style from '../Global.module.css'

const LoginPage=()=>{
  return (
    <Stack direction="row">
      <Login/>
      <Image src={LoginImage} className={style.entryImg} alt=''></Image>
    </Stack>
  )
}

export default LoginPage;