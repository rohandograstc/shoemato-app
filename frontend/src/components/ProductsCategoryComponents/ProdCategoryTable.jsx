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
import EditIcon from "@/assets/svg/editIcon.jsx";
import CrossIcon from "@/assets/svg/crossIcon.jsx";
import { paraStyle } from "@/globalStyles/typoStyles.jsx";

const ProdCategoryTable = () => {
  return (
    <Paper sx={{ width: "100%", mb: 2, boxShadow: "none", padding: "0 20px" }}>
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
          <TableHead sx={{ borderBottom: 0 }}>
            <TableRow>
              {tableHead?.map((cellName, i) => (
                <TableCell
                  key={i}
                  sx={{ borderBottom: "none", py: "27px" }}
                  align="center"
                >
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
                    p: "4px",
                  }}
                  style={{
                    padding: "17px 12px",
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
                    <Typography
                      variant="span"
                      sx={{ ...paraStyle, color: "#788B9A" }}
                    >
                      {row.catId}
                    </Typography>
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
                        variant="span"
                        sx={{ ...paraStyle, color: "#788B9A" }}
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
                    p: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <EditIcon />
                  <CrossIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ProdCategoryTable;
