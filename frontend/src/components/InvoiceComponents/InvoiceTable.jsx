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
import { rows, tableHead } from "./constants.jsx";
import { CellTypo } from "@/styledComponents/CellTypo.jsx";
import { paraStyle } from "@/globalStyles/typoStyles.jsx";

const InvoiceTable = () => {
  return (
    <Paper sx={{ width: "100%", mb: 2, boxShadow: "none", padding: "0" }}>
      <TableContainer
        component={Paper}
        sx={{
          my: "10px",
          boxShadow: "none",
          border: "10px",
          minHeight: "50vh", // For Now for matching UI
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ borderBottom: "5px solid gray" }}>
            <TableRow>
              {tableHead?.map((cellName, i) => (
                <TableCell key={i} sx={{ py: "7px" }} align="center">
                  <Typography variant="span" sx={paraStyle}>
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
                    padding: "10px",
                  }}
                  align="center"
                >
                  <Typography
                    variant="span"
                    sx={{ ...paraStyle, color: "#788B9A" }}
                  >
                    {row.inId}
                  </Typography>
                </TableCell>
                {Object?.values(row)
                  ?.slice(1)
                  ?.map((cell, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      sx={{
                        cursor: "pointer",
                        borderBottom: "none",
                        padding: "10px",
                      }}
                    >
                      <Typography
                        variant="span"
                        sx={{ ...paraStyle, color: "#788B9A" }}
                      >
                        {cell}
                      </Typography>
                    </TableCell>
                  ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InvoiceTable;
