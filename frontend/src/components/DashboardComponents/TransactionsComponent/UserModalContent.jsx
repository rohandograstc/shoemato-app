import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../dashboard.module.css";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/styledComponents/SearchStyles";
import SearchIcon from "@mui/icons-material/Search";
import UserInfoModalTable from "./UserInfoModalTable";

function UserModalContent({ title }) {
  return (
    <Box>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        className={styles.cardTitle}
        sx={{transform:"translateX(20px)", display:"inline-block", marginY:"20px"}}
      >
        {title}
      </Typography>
      <Search sx={{transform:"translateX(-10px)"}} >
        <StyledInputBase
          searchwidth={"290px"}
          placeholder="Search"
          inputProps={{
            "aria-label": "search",
          }}
          sx={{
            border: "0.3px solid #ecedec",
            boxShadow: "inset 0px 0px 1px rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
        />
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "black" }} />
        </SearchIconWrapper>
      </Search>
      <UserInfoModalTable />
    </Box>
  );
}

export default UserModalContent;
