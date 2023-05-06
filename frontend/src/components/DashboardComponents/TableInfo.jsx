import React from "react";
import styles from "./dashboard.module.css";

//Others

import AutorenewIcon from "@mui/icons-material/Autorenew";

// Styled Components

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styledComponents/NavComponents";
import { StyledButton } from "@/styledComponents/NavComponents";

import SearchIcon from "@mui/icons-material/Search";
import { Box, Paper, Typography } from "@mui/material";

// SubComponents

import { MonthlySelect } from "./TopVendors";
import TransactionTable from "./TransactionTable";

export default function TableInfo() {
  const headArray = [
    {
      name: "Transactions",
      btnWidth: "160px",
      btnRadius: "0px",
      mrx: "5px",
    },
    {
      name: "Sales",
      btnWidth: "150px",
      btnRadius: "0px",
      mrx: "5px",
      bgcolor: "white",
      tcolor: "black",
    },
    {
      name: "Transactions",
      btnWidth: "150px",
      btnRadius: "0px 5px 5px 0px",
      mrx: "10px",
      bgcolor: "white",
      tcolor: "black",
    },
  ];

  return (
    <Paper sx={{ borderTopLeftRadius: "15px", paddingBottom:"5px", height:"100%" }}>
      <Box className={styles.transactionTableHeader}>
        {headArray.map((headData, index) => (
          <StyledButton
            key={index}
            variant="contained"
            btnwidth={headData.btnWidth}
            btnradius={headData.btnRadius}
            sx={{ marginRight: headData.mrx, boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.1)" }}
            bgcolor={headData?.bgcolor}
            tcolor={headData?.tcolor}
          >
            <Typography variant="h4" className={styles.tableHeaderbtnText}>
              {headData.name}
            </Typography>
          </StyledButton>
        ))}
        <MonthlySelect />
        <Search>
          <StyledInputBase
            searchwidth={"150px"}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "black" }} />
          </SearchIconWrapper>
        </Search>
        <AutorenewIcon
          sx={{
            backgroundColor: "#0D1A26",
            color: "white",
            borderRadius: "100%",
            fontSize: "30px",
          }}
        />
      </Box>
      <TransactionTable/>
    </Paper>
  );
}
