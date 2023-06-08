import Login from "../../components/Login/Login";
import LoginImage from "../../assets/LoginPage.svg";
import Image from "next/image";
import { Stack, Box } from "@mui/material";
import style from "../Global.module.css";
import Link from 'next/link'

const LoginPage = ({setExist, setEnter}) => {
  return (
    <>
      <Box
        className={style.signupBtn}
        onClick={() => {
          setExist(false);
          document.querySelector("#chkbox").click();
        }}
      >
        <Link id="chkbox" href="/RegisterPage"></Link>
      </Box>
      <Stack direction="row">
        <Login setEnter={setEnter} />
        <Image src={LoginImage} className={style.entryImg} alt=""></Image>
      </Stack>
    </>
  );
};

export default LoginPage;
