import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";

import { DrawerHeader, AppBar, Drawer } from "@/styledComponents/Drawer";
import Image from "next/image";

// Image / Logo

import Logos from "../../assets/svg";

// CSS
import styles from "./page.module.css";
import Link from "next/link";

// Other

import { useRouter } from "next/router";

const SideNav = () => {
  const open = true;
  const menuId = "primary-search-account-menu";

  const { pathname } = useRouter();

  const IconArray = [
    Logos.dashboard,
    Logos.sales,
    Logos.products,
    Logos.returnIcon,
    Logos.orders,
    Logos.vendors,
    Logos.inventory,
    Logos.complaints,
    Logos.settings,
    Logos.dashboardDark,
    Logos.sales,
    Logos.products,
    Logos.returnIcon,
    Logos.orders,
    Logos.vendors,
    Logos.inventoryDark,
    Logos.complaints,
    Logos.settings,
  ];

  const sideNavArray = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Daily Sales" },
    { name: "Products" },
    { name: "Return" },
    { name: "Invoice" },
    { name: "Vendors" },
    { name: "Inventory", link: "/inventory" },
    { name: "Complaints" },
    { name: "Settings" },
  ];

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={styles.appBar}
        style={{ background: "#0d1a26" }}
        open={open}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 0.5 }} />
          <Box sx={{ flexGrow: 0.5 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "30px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" className={styles.appbarTexts} noWrap>
                Admin ID
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6" className={styles.appbarTexts} noWrap>
                Greko
              </Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: "35px" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
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
        <List sx={{ marginTop: "20px" }}>
          {sideNavArray.map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
              <Link
                href={text.link !== undefined ? `${text?.link}` : "/dashboard"}
                style={{ textDecoration: "none" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: pathname === text?.link && "white",
                    color: pathname === text?.link ? "black" : "white",
                    "&:hover": {
                      backgroundColor: pathname === text?.link && "white",
                    },
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={
                        pathname === text?.link
                          ? IconArray[index + 9]
                          : IconArray[index]
                      }
                      alt="icons"
                      width="30px"
                      height="30px"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text.name}
                    sx={{
                      opacity: open ? 1 : 0,
                      fontFamily: "Montserrat",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default SideNav;
