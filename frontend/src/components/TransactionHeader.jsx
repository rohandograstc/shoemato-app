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
import Link from "next/link";

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
            {props?.headertext ? props?.headertext : "TOP SELLING PRODUCT"}
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
                boxShadow: headData.btnshadow
                  ? headData.btnshadow
                  : "0px 4px 12px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: headData.btnshadow && headData.btnshadow,
                },
              }}
              bgcolor={headData?.bgcolor}
              tcolor={headData?.tcolor}
              btnpad={"7px 20px"}
            >
              {props.links ? (
                <Link
                  href={`${headData.path}`}
                  style={{ textDecoration: "none", color : "inherit"}}
                >
                  <HeadingTypo variant="h4">{headData.name}</HeadingTypo>
                </Link>
              ) : (
                <HeadingTypo variant="h4">{headData.name}</HeadingTypo>
              )}
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
            backgroundColor: props.renewwhite ? "white" : "#0D1A26",
            color: props.renewwhite ? "black" : "white",
            borderRadius: "100%",
            fontSize: "30px",
          }}
        />
      </Box>
    </Box>
  );
};

export default TransactionHeader;
