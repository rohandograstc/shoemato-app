import React from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, TextField, Typography } from '@mui/material';
import style from './Register.module.css';
import fbIcon from '../../assets/facebook_icon.svg'
import appleIcon from '../../assets/apple_icon.svg'
import googleIcon from '../../assets/google_icon.svg'
import Image from 'next/image';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Register=()=> {
    return (
        <>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.title}>
                        Register
                    </div>

                    <div className={style.title_signup}>
                        Sign up with
                    </div>


                    <Stack direction="row" spacing={3} style={{
                        margin: "1rem 0rem",
                        display: "flex",
                        alignItems: "center",
                        width:"75%",
                        justifyContent: "space-evenly"
                    }}>
                        <Box boxShadow={3} borderRadius="50%" className={style.card} >
                            <Image src={fbIcon} alt='FB' className={style.icons} />
                        </Box>
                        <Box boxShadow={3} borderRadius="50%" className={style.card} >
                            <Image src={googleIcon} alt='Google' className={style.icons} />
                        </Box>
                        <Box boxShadow={3} borderRadius="50%" className={style.card} >
                            <Image src={appleIcon} alt='Apple' className={style.icons} />
                        </Box>
                    </Stack>
                    <div className={style.divider} />
                    <div className={style.title2} >
                        User Details
                    </div>
                    <div className={style.user_detail2}>

                        <TextField id="outlined-basic" label="First Name" sx={inputBoxStyle} variant="outlined" className={style.input} />
                        <TextField id="outlined-basic" label="Last Name" sx={inputBoxStyle} variant="outlined" className={style.input} />
                    </div>
                    <div className={style.user_detail2}>
                        <div className={style.mobile_number}>
                            <TextField
                                sx={code}
                                className={style.input.country}
                                id="outlined-basic"
                                variant='outlined'
                                select
                                defaultValue="1"
                            >
                                {country.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="outlined-basic" label="Mobile no." sx={inputBoxStyle} type='phonenumber' variant="outlined" className={style.input} />
                        </div>
                        <div className={style.role}>
                            <TextField
                                sx={inputBoxStyle}
                                
                                className={style.input}
                                id="outlined-basic"
                                variant='outlined'
                                select
                                label="ROLE"
                                
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                    </div>
                    <div className={style.withEmail}>
                        <div className={style.title2} >
                            SignUp Details :
                        </div>
                        <div >
                            <TextField id="outlined-basic" sx={inputBoxStyle} label="Email " variant="outlined" className={style.input} />
                            <TextField label="Password " sx={inputBoxStyle} variant="outlined" className={style.input} />
                            <Typography className={style.desc_text}
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: 10,
                                        lineHeight: 0
                                    }
                                }}>
                                Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number
                            </Typography>
                        </div>
                        <div>
                            <FormGroup sx={{
                                "& .MuiFormGroup-root": {
                                    marginTop: 1,
                                    marginBottom: 2
                                }
                            }}>
                                <FormControlLabel className={style.desc_text} sx={check_box} control={<Checkbox />} label="T and C (compulsory)" />
                                <FormControlLabel className={style.desc_text} sx={check_box} control={<Checkbox />} label="Optional T and C" />
                            </FormGroup>
                        </div>
                        <div className={style.btn}>
                            <button type='submit' className={style.btn}>REGISTER<span><ArrowForwardIcon style={{fontSize:"14px"}} /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//input box css started here
const inputBoxStyle = {
    "& .MuiInputBase-root": {
        height: 22,
        paddingTop: 2.3,
        paddingBottom: 2.5,
        marginTop: .9,
        marginBottom: .9,
        fontSize: 16,
        border: 1.5,
        borderRadius: 1.8

    },
    "& .MuiInputLabel-root": {
        fontSize: 14,
        padding: .5,
    

    }
}
// inputbox css end here

//mobile country code dorpdown css started here
const code = {
    "& .MuiInputBase-root": {
        height: 14,
        paddingTop:2.5,
        paddingBottom: 2.3,
        marginTop: .9,
        marginBottom: .9,
        fontSize: 14,
        border: 1.5,
        borderRadius: 1.8,
        overflow:"visible",

    },
    "& .MuiInputLabel-root": {
        fontSize: 10,
        padding: .2,
        overflow:"visible"

    },
    "& MuiSelect-icon":{
        overflow:"visible"
        },
    "& .MuiInputBase-input":{
        padding:0.1,
        fontSize:14,
        padding:0,
        overflow:"visible",
    },
    "& .MuiSelect-select":{
        overflow:"inherit"
    },
    "& .MuiSvgIcon-root":{
        right:0,
        height:.5,
        width:.4,
        overflow:"visible"
       
    },
    "& .MuiSelect-outlined":{
        overflow:"visible"
    }
}//mobile country code dorpdown css started here


//checkbox css started here
const check_box = {
    "& .MuiFormControlLabel-root": {
        padding: .2,
        margin:0,
        

    },
    "& .MuiTypography-root": {
        fontSize: 14,
        margin: .0,
    },
    "& .PrivateSwitchBase-input":{
        margin:0,
        padding:0

    }
}
//checkbox css end here


const currencies = [
    {
        value: '1',
        label: 'Manufacturer',
    },
    {
        value: '2',
        label: 'WholeSeller',
    },
    {
        value: '3',
        label: 'Retailer',
    },
    {
        value: '4',
        label: 'Customer',
    },
];

const country = [
    {
        value: '1',
        label: '+91',
    }

];

export default Register;