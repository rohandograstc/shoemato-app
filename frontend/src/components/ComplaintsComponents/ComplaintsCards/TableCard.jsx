import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../complaints.module.css";
import { CardDiv } from "@/styledComponents/Card";

const TableCard = ({ headArray }) => {
  return (
    <CardDiv
      boxwidth={"100%"}
      boxheight="200px"
      className={styles.tableCardCon}
    >
      <Box className={styles.headingCon}>
        <Box sx={{ width: "32%" }} />
        <HeadingTypo
          variant="h4"
          ffamily={"Open Sans"}
          sx={{ width: "32%", textAlign: "center" }}
        >
          Resolved
        </HeadingTypo>
        <HeadingTypo
          variant="h4"
          ffamily={"Open Sans"}
          sx={{ width: "32%", textAlign: "center" }}
        >
          Pending
        </HeadingTypo>
      </Box>
      <Box className={styles.tableCon}>
        <Box className={styles.tableCardBtnsCon}>
          {headArray?.map((headData, index) => {
            return (
              <Box className={styles.tableRow} key={index}>
                <Box sx={{ width: "32%" }}>
                  <StyledButton
                    variant="contained"
                    btnwidth={headData.btnWidth}
                    btnradius={headData.btnRadius}
                    sx={{
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
                    <HeadingTypo variant="h4">{headData.name}</HeadingTypo>
                  </StyledButton>
                </Box>
                <Typography
                  variant="p"
                  sx={{ width: "32%", paddingTop: "10px" }}
                >
                  20
                </Typography>
                <Typography
                  variant="p"
                  sx={{ width: "32%", paddingTop: "10px" }}
                >
                  20
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </CardDiv>
  );
};

export default TableCard;
