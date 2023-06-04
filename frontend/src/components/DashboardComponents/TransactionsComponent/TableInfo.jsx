import React from "react";
import styles from "../dashboard.module.css";

//Others

import AutorenewIcon from "@mui/icons-material/Autorenew";

// Styled Components

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/styledComponents/SearchStyles";
import { StyledButton } from "@/styledComponents/StyledBtn";

import SearchIcon from "@mui/icons-material/Search";
import { Box, Paper, Typography } from "@mui/material";

// SubComponents

import { MonthlySelect } from "../SummaryCardsComponent/TopVendors";
import TransactionTable from "./TransactionTable";
import { HeadingTypo } from "@/styledComponents/HeadingTypo";

const TableInfo=()=> {
  const headArray = [
    {
      name: "Brand",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "5px",
    },
    {
      name: "Vendor",
      btnWidth: "fit-content",
      btnRadius: "0px",
      mrx: "5px",
      bgcolor: "white",
      tcolor: "black",
    },
    {
      name: "Transactions",
      btnWidth: "fit-content",
      btnRadius: "0px 10px 10px 0px",
      mrx: "10px",
      bgcolor: "white",
      tcolor: "black",
    },
  ];

  return (
    <Paper
      sx={{
        borderTopLeftRadius: "15px",
        paddingBottom: "5px",
        height: "100%",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box className={styles.transactionTableHeader}>
        {headArray.map((headData, index) => (
          <StyledButton
            key={index}
            variant="contained"
            btnwidth={headData.btnWidth}
            btnradius={headData.btnRadius}
            sx={{
              marginRight: headData.mrx,
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            bgcolor={headData?.bgcolor}
            tcolor={headData?.tcolor}
            btnpad = {"7px 20px"}
          >
            <HeadingTypo variant="h4"  >{headData.name}</HeadingTypo>
          </StyledButton>
        ))}
        <MonthlySelect />
        <Search >
          <StyledInputBase
            searchwidth={"150px"}
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
        <AutorenewIcon
          sx={{
            backgroundColor: "#0D1A26",
            color: "white",
            borderRadius: "100%",
            fontSize: "30px",
          }}
        />
      </Box>
      <TransactionTable />
    </Paper>
  );
}
export default TableInfo