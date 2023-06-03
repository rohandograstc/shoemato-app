import React from "react";
import styles from "./DashboardComponents/dashboard.module.css";

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
import { Box, Typography } from "@mui/material";

// SubComponents

import { MonthlySelect } from "./TopVendors";

import { HeadingTypo } from "@/styledComponents/HeadingTypo";

const TransactionHeader = (props) => {
  return (
    <Box className={styles.transactionTableHeader}>
      {props.prodHeader === true ? (
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            borderRadius: "10px 10px 10px 0px",
          }}
        >
          <Typography vairant="p" sx={{ fontSize: "22px" }}>
            TOP SELLING PRODUCT
          </Typography>
        </Box>
      ) : (
        <Box sx={{ display: "flex" }}>
          {props.headArray.map((headData, index) => (
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
              btnpad={"7px 20px"}
            >
              <HeadingTypo variant="h4">{headData.name}</HeadingTypo>
            </StyledButton>
          ))}
        </Box>
      )}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {props.calendar && <MonthlySelect text={"Calendar"} />}
        <Search>
          <StyledInputBase
            searchwidth={props.searchwidth ? props.searchwidth : "150px"}
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
            <SearchIcon
              sx={{
                color: "black",
              }}
            />
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
    </Box>
  );
};

export default TransactionHeader;
