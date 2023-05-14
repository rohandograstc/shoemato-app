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

import {
  DrawerHeader,
  AppBar,
  Drawer,
} from "../../styledComponents/NavComponents";
import Image from "next/image";

// Image / Logo

import Logos from "../../assets/svg";

// CSS
import styles from "./page.module.css";

export default function SideNav() {
  const open = true;
  const menuId = "primary-search-account-menu";

  const IconArray = [
    Logos.dashboard,
    Logos.products,
    Logos.inventory,
    Logos.sales,
    Logos.returnIcon,
    Logos.orders,
    Logos.vendors,
    Logos.users,
    Logos.employees,
    Logos.complaints,
    Logos.transactions,
    Logos.settings,
  ];

  const sideNavArray = [
    "Dashboard",
    "Products",
    "Inventory",
    "Sales",
    "Return",
    "Orders",
    "Vendors",
    "Users",
    "Employees",
    "Complaints",
    "Transactions",
    "Settings",
  ];

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar} open={open}>
        <Toolbar>
          <Box sx={{ flexGrow: 0.5 }} />
          {/* Removed Search  */}
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
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  backgroundColor: index === 0 && "white",
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
                    src={IconArray[index]}
                    alt="icons"
                    width="30px"
                    height="30px"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: index === 0 ? "black" : "white",
                    fontFamily: "Montserrat",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
