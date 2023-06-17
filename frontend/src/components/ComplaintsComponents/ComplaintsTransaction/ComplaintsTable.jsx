import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { rows, tableHead } from "./constants.jsx";
import { CellTypo } from "@/styledComponents/CellTypo.jsx";
import editIcon from "../../../assets/svg/editIcon.svg";
import deleteIcon from "../../../assets/svg/deleteIcon.svg";
import Image from "next/image.js";
import styles from "../complaints.module.css";

const ComplaintsTable = () => {
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
          <TableHead sx={{ borderBottom: "5px solid #D9D9D9" }}>
            <TableRow>
              <TableCell sx={{ py: "7px" }} align="center">
                <CellTypo variant="span">Invoice ID</CellTypo>
              </TableCell>
              {tableHead.slice(1, tableHead.length).map((cellName, i) => (
                <TableCell key={i} sx={{ py: "7px" }} align="center">
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
                    p: "10px",
                  }}
                  style={{
                    padding: "10px",
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
                        p: "10px",
                      }}
                    >
                      <CellTypo variant="span" fcolor={"#788B9A"}>
                        {cell}
                      </CellTypo>
                    </TableCell>
                  ))}
                <TableCell
                  sx={{
                    cursor: "pointer",
                    borderBottom: "none",
                    p: "10px",
                  }}
                >
                  <Box className={styles.actionCell}>
                    <Image src={editIcon} alt="editIcon" />
                    <Image src={deleteIcon} alt="deleteIcon" />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ComplaintsTable;
