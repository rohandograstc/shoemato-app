import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { rows, tableHead } from "./constants";
import { Typography } from "@mui/material";

export default function InventoryTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        my: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        border: "10px",
        height: "60vh", // For Now for matching UI
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ borderBottom: "5px solid #D9D9D9" }}>
          <TableRow>
            <TableCell sx={{ py: "7px" }} align="center">
              Product ID
            </TableCell>
            {tableHead.slice(1, tableHead.length).map((cellName, i) => (
              <TableCell key={i} sx={{ py: "7px" }} align="center">
                {cellName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{
                width: "100%",
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              bgcolor={i % 2 !== 0 && "#F1F4FA"}
              style={{
                
                padding: "12px 12px",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  cursor: "pointer",
                  borderBottom: "none",
                  p: "4px",
                }}
                style={{
                  padding: "12px 12px",
                }}
                align="center"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: "400",
                  }}
                >
                  {row.pId}
                </Typography>
              </TableCell>
              {Object.values(row)
                .slice(1, -1)
                .map((cell, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      cursor: "pointer",
                      borderBottom: "none",
                      p: "4px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "12px",
                        lineHeight: "16px",
                        fontWeight: "400",
                      }}
                    >
                      {cell}
                    </Typography>
                  </TableCell>
                ))}
              <TableCell
                align="center"
                sx={{
                  cursor: "pointer",
                  borderBottom: "none",
                  p: "4px",
                }}
              >
                <StyledButton
                  variant="contained"
                  btnwidth={"80px"}
                  btnradius={"8px"}
                  bgcolor={"#0D1A26"}
                  tcolor={"white"}
                >
                  {row.mrp}
                </StyledButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
