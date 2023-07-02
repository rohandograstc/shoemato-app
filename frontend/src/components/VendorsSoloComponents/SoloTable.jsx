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
// import { rows, tableHead } from "./constants.jsx";
import { paraStyle } from "@/globalStyles/typoStyles";

const SoloTable = ({ tablesizeFixed, rows, tableHead, twidth }) => {
  return (
    <Paper
      sx={{
        minWidth: 340,
        width: "100%",
        mb: 2,
        boxShadow: "none",
        padding: "0",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          my: "10px",
          boxShadow: "none",
          border: "10px",
          minHeight: !tablesizeFixed && 320,
          height: tablesizeFixed ? 230 : 350,
          overflowY: tablesizeFixed && "scroll",
        }}
      >
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHead?.map((cellName, i) => (
                <TableCell
                  key={i}
                  align="center"
                  sx={{
                    borderBottom: "4px solid #D9D9D9",
                    width: twidth,
                    padding: "14px 0",
                  }}
                >
                  {cellName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, i) => (
              <TableRow
                key={i}
                sx={{
                  width: "100%",
                  "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: i % 2 !== 0 && "#F1F4FA",
                  borderRadius: "13px",
                  overflow: "hidden",
                }}
              >
                {Object.values(row)?.map((cell, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      cursor: "pointer",
                      borderBottom: "none",
                      padding: "14px 0",
                      width: twidth,
                    }}
                  >
                    <Typography
                      sx={{ ...paraStyle, color: "#788B9A" }}
                      variant="h6"
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

export default SoloTable;
