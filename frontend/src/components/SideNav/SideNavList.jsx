import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { IconArray, sideNavArray } from "./constants";

import Link from "next/link";
import Image from "next/image";
import { headingStyle } from "@/globalStyles/typoStyles";

const SideNavList = (props) => {
  return (
    <List
      sx={{
        marginTop: "20px",
      }}
    >
      {sideNavArray.map((text, index) => (
        <ListItem
          key={text.name}
          disablePadding
          sx={{
            display: "block",
          }}
        >
          <Link
            href={text.link !== undefined ? `${text?.link}` : "/dashboard"}
            style={{
              textDecoration: "none",
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: props.open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  props.firstPath === text?.link?.substring(1) && "white",
                color:
                  props.firstPath === text?.link?.substring(1)
                    ? "black"
                    : "white",
                "&:hover": {
                  backgroundColor:
                    props.firstPath === text?.link?.substring(1) && "white",
                },
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={
                    props.firstPath === text?.link?.substring(1)
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
                  opacity: props.open ? 1 : 0,
                  "& .MuiListItemText-primary": headingStyle,
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default SideNavList;
