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
import { paraStyle } from "@/globalStyles/typoStyles";

const TransactionTable = () => {
  return (
    <Paper sx={{ width: "100%", mb: 2, boxShadow: "none", padding: "0 20px" }}>
      <TableContainer
        component={Paper}
        sx={{
          my: "10px",
          boxShadow: "none",
          border: "10px",
          minHeight: "60vh", // For Now for matching UI
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ borderBottom: 0 }}>
            <TableRow>
              {tableHead?.map((cellName, i) => (
                <TableCell
                  key={i}
                  sx={{ borderBottom: "none", py: "27px" }}
                  align="center"
                >
                  <Typography variant="h4" sx={paraStyle}>
                    {cellName}
                  </Typography>
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
                      ...paraStyle,
                      color: "#788B9A",
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
                            ...paraStyle,
                            color: "#788B9A",
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
    </Paper>
  );
};

export default TransactionTable;
