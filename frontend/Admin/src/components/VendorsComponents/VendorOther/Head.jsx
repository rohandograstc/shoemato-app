import { Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

//Styled Components
import { StyledTypography } from "@/styledComponents/OverTimePage/StyledTypography";
import { StyledBtns } from "@/styledComponents/OverTimePage/StyledBtns";
import React from "react";
import Link from "next/link";

const Head = ({ headArray, nameIndex }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {headArray?.map((data, index) => (
        <StyledBtns
          key={index}
          variant="contained"
          disableElevation
          startIcon={
            index ===  nameIndex && (
              <DoneIcon
                sx={{
                  color: "black",
                }}
              />
            )
          }
          btnradius={`${data?.btnradius}`}
          btncolor={`${data?.btncolor}`}
          sx={{
            borderWidth: data?.borderwidth
              ? `${data?.borderwidth}`
              : "1px solid #0D1A26",
            width: "200px",
            textAlign: "center",
          }}
        >
          <Link href={`${data.path}`} style={{ textDecoration: "none", color: "white" }} >
            <StyledTypography variant="h4">{data?.name}</StyledTypography>
          </Link>
        </StyledBtns>
      ))}
    </Box>
  );
};

export default Head;
