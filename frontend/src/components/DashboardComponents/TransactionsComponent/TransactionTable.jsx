
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { brows as rows, btableHead as tableHead } from "./constants.jsx";
import { CellTypo } from "@/styledComponents/CellTypo.jsx";

const TransactionTable = () => {
  return (
    <Paper sx={{ width: "100%", mb: 2, boxShadow: "none", padding: "0" }}>
      <TableContainer
        component={Paper}
        sx={{
          my: "10px",
          paddingX: "10px",
          boxShadow: "none",
          border: "10px",
          minHeight: "50vh", // For Now for matching UI
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ borderBottom: "none" }}>
            <TableRow>
              {tableHead?.map((cellName, i) => (
                <TableCell
                  key={i}
                  sx={{ py: "7px", borderBottom: "none" }}
                  align="center"
                >
                  <CellTypo variant="span">{cellName}</CellTypo>
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
                  borderRadius: "5px",
                }}
                bgcolor={i % 2 === 0 && "#F1F4FA"}
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
                    borderRadius : "5px 0 5px 0"
                  }}
                  style={{
                    padding: "20px 0",
                  }}
                  align="center"
                >
                  <CellTypo variant="span" fcolor={"#788B9A"}>
                    {row.inId}
                  </CellTypo>
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
                        borderRadius : index === 3 && "0 5px 0 5px"
                      }}
                      style={{padding : "20px 0"}}
                    >
                      <CellTypo variant="span" fcolor={"#788B9A"}>
                        {cell}
                      </CellTypo>
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

export default TransactionTable;
