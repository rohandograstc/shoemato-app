import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

//Styled Components
import { StyledTypography } from "@/styledComponents/OverTimePage/StyledTypography";
import { StyledBtns } from "@/styledComponents/OverTimePage/StyledBtns";
import React from "react";

const OverTimeHead = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledBtns
        variant="contained"
        disableElevation
        startIcon={
          <DoneIcon
            sx={{
              color: "black",
            }}
          />
        }
        btnradius={"100px 0px 0px 100px"}
        btncolor={"#0D1A261A"}
      >
        <StyledTypography variant="h4">
          Manufactures to Wholesaler
        </StyledTypography>
      </StyledBtns>
      <StyledBtns
        variant="contained"
        disableElevation
        btnradius={"0px"}
        btncolor={"#fff"}
        sx={{
          borderWidth: "1px 0px",
        }}
      >
        <StyledTypography variant="h4">
          Manufactures to Retailer
        </StyledTypography>
      </StyledBtns>
      <StyledBtns
        variant="contained"
        disableElevation
        btnradius={"0px 100px 100px 0px"}
        btncolor={"#fff"}
      >
        <StyledTypography variant="h4">Wholesaler to Retailer</StyledTypography>
      </StyledBtns>
    </Box>

  );

};

export default OverTimeHead;
