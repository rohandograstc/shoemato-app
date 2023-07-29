import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { DrawerHeader, Drawer } from "@/styledComponents/Drawer";
import Image from "next/image";

// CSS
import styles from "./page.module.css";

// Image / Logo

import Logos from "../../assets/svg";

// Other

import { useRouter } from "next/router";
import ReportBtn from "../ReportBtn";
import TopBar from "./TopBar";
import SideNavList from "./SideNavList";



const SideNav = () => {
  const open = true;
  const menuId = "primary-search-account-menu";

  const { pathname } = useRouter();
  const firstPath = pathname.split("/")[1];

  return (
    <>
      <CssBaseline />
      <TopBar open={open} menuId={menuId} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Image
            src={Logos.shoeMatoLogo}
            alt="logo"
            width="80px"
            height="80px"
            className={styles.logo}
          />
        </DrawerHeader>
        <Box className={styles.listCon}>
          <SideNavList open={open} firstPath={firstPath} />
          <ReportBtn />
        </Box>
      </Drawer>
    </>
  );
};
export default SideNav;
