import { Box} from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "@/styledComponents/SearchStyles";
import SearchIcon from "@mui/icons-material/Search";

import { StyledTypography } from "@/styledComponents/InventoryPage/StyledTypography";
import { StyledBtns } from "@/styledComponents/InventoryPage/StyledBtns";

import AutorenewIcon from "@mui/icons-material/Autorenew";

const InventoryTableHead = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
        justifyContent: "space-between",
        padding: "0 30px 0 0",
      }}
    >
      <Search>
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <StyledBtns
            variant="contained"
            disableElevation
            btnradius={"100px"}
            btncolor={"#0D1A261A"}
            sx={{ width: "150px" }}
          >
            <StyledTypography variant="h4">On Time </StyledTypography>
            <StyledTypography variant="h4">12,900</StyledTypography>
          </StyledBtns>
          <StyledBtns
            variant="contained"
            disableElevation
            btnradius={"100px"}
            btncolor={"#0D1A26"}
            sx={{ width: "130px" }}
          >
            <StyledTypography tcolor={"white"} variant="h4">
              Delay
            </StyledTypography>
            <StyledTypography tcolor={"white"} variant="h4">
              15
            </StyledTypography>
          </StyledBtns>
          <StyledBtns
            variant="contained"
            disableElevation
            btnradius={"100px"}
            btncolor={"#0D1A26"}
            sx={{ width: "130px" }}
          >
            <StyledTypography tcolor={"white"} variant="h4">
              Overtime
            </StyledTypography>
            <StyledTypography tcolor={"white"} variant="h4">
              5
            </StyledTypography>
          </StyledBtns>
        </Box>

        <AutorenewIcon
          sx={{
            backgroundColor: "#fff",
            color: "black",
            borderRadius: "100%",
            fontSize: "30px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>
    </Box>
  );
};
export default InventoryTableHead;
