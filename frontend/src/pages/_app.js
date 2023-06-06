import { wrapper } from "@/Redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import "@/styles/globals.css";
import SideNav from "@/components/SideNav/SideNav";
import { Box, Button } from "@mui/material";
import { DrawerHeader } from "@/styledComponents/Drawer";
import { useState } from "react";
import Register from './RegisterPage';
import Login from './LoginPage'

function App({ Component, pageProps }) {
  const [enter, setEnter] = useState(false);
  const [exist, setExist] = useState(true);
  return (
    <I18nextProvider i18n={i18n}>
      {enter ?
        <Box
          sx={{
            display: "flex",
          }}
        >
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box>
              <DrawerHeader />
              <Component {...pageProps} />
            </Box>
          </Box>
        </Box> : <>
          {
            exist ?
              <Login setExist={setExist} setEnter={setEnter} /> :
              <Register setExist={setExist} setEnter={setEnter} />
          }
        </>
      }
    </I18nextProvider>
  );
}

export default wrapper.withRedux(App);
