import { StyledButton } from "@/styledComponents/StyledBtn";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { rows, tableHead } from "./constants";

const TransactionTable = () => {
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
        <TableHead>
          <TableRow>
            <TableCell sx={{ py: "7px" }} align="center">
              Product Name
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
                  {row.pName}
                </Typography>
              </TableCell>
              {Object.values(row)
                .slice(1)
                .map((cell, index) =>
                  index !== 2 ? (
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
                  ) : (
                    <TableCell
                      key={index}
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
                        {row.totalAmount}
                      </StyledButton>
                    </TableCell>
                  )
                )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
