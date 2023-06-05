import { wrapper } from "@/Redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import "@/styles/globals.css";

import SideNav from "@/components/SideNav/SideNav";
import { Box } from "@mui/material";
import { DrawerHeader } from "@/styledComponents/Drawer";

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
          <Box>
          <DrawerHeader />
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    </I18nextProvider>
  );
}

export default wrapper.withRedux(App);
