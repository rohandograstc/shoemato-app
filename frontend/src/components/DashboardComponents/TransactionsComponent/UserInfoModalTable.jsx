import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { rows, tableHead } from "./constants";
import { Typography } from "@mui/material";

export default function UserInfoModalTable(props) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        my: "10px",
        boxShadow: "none",
        border: "10px",
        minHeight: 350,
      }}
    >
      <Table sx={{ minWidth: 340 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((cellName, i) => (
              <TableCell
                key={i}
                align="center"
                sx={{ borderBottom: "none", padding: "14px 0" }}
              >
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
                    borderTopLeftRadius: index === 0 && "5px",
                    borderTopRightRadius: index === 2 && "5px",
                    borderBottomLeftRadius: index === 0 && "5px",
                    borderBottomRightRadius: index === 2 && "5px",
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
                    {cell} {index}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
