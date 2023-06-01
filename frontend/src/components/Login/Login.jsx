import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, TextField, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from './Login.module.css';
import Image from 'next/image';
import fbIcon from '../../assets/facebook_icon.svg'
import appleIcon from '../../assets/apple_icon.svg'
import googleIcon from '../../assets/google_icon.svg'



const Login=()=> {
    return (
        <Box className={style.super_container}>
            <Stack className={style.container}>
                <Stack className={style.box}>
                    <Typography variant="h4" className={style.login_title}>
                        Login
                    </Typography >
                    
                    <TextField  label="Email or Mobile No" variant="outlined" className={style.input}  
                    sx={inputBoxStyle} />
                    <TextField  label="Password or OTP" variant="outlined" className={style.input}
                    sx={inputBoxStyle}
                    />
                    <Typography className={style.desc_text} style={{fontWeight:"600",textDecoration:"underline"}} >
                        Forgot your password?
                    </Typography>
                    <FormGroup>
                        <FormControlLabel sx={check_box} className={style.desc_text} control={<Checkbox />} label="Keep me logged in - applies to all log in options below. More info" />
                    </FormGroup>
                    <Stack direction="row" spacing={3} style={{
                        margin:"1rem 3rem 2rem 3rem",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-evenly"
                    }}>
                        
                        <Box boxShadow={3} borderRadius="50%" className={style.card} >
                        <Image src={googleIcon} alt='Google' className={style.icons} />
                        </Box>
                        <Box boxShadow={3} borderRadius="50%" className={style.card} >
                        <Image src={appleIcon} alt='Apple' className={style.icons} />
                        </Box>
                        <Box boxShadow={2} borderRadius="50%" className={style.card} >
                        <Image src={fbIcon} alt='FB' className={style.icons} />
                        </Box>
                    </Stack>
                    <div className={style.btn}>
                            <button type='submit' className={style.btn}>EMAIL LOGIN<span><ArrowForwardIcon style={{fontSize:"14px"}} /></span></button>
                        </div>
                    <Typography className={style.desc_text} style={{marginTop:"1rem"}}>
                        Terms And Conditions
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    )
}


const check_box={
    "& .MuiFormControlLabel-root":{
      padding:.2
    },
    "& .MuiTypography-root":{
      fontSize:14,
      margin:.2,
      fontWeight:550
    },
    "& .MuiSvgIcon-root":{
        color:"#000000"
    }
  }

  const inputBoxStyle={
    "& .MuiInputBase-root":{
      height:22,
      paddingTop:3,
  paddingBottom:2,
      marginTop:1 ,
      marginBottom:1,
      fontSize:16,
      border:1.5,
      borderRadius:1.8
  
    },
    "& .MuiInputLabel-root":{
        fontSize:12,
        padding:.5,
       
    },
    "& .MuiFormControl-root":{
        margin:0
    }
  }
const btn_text={
    "& .MuiButton-root":{
        justifyContent:"flex-start",
        margin:.1,
        fontWeight:550,
        color:"#000000",
        backgroundColor:"#000000"

      },
      "& .MuiTouchRipple-root":{
        color:"#000000",
        backgroundColor:"#000000"
      }
}

export default Login;