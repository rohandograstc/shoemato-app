import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";

import styles from "./dashboard.module.css";
import { Typography } from "@mui/material";
import { StyledButton } from "@/styledComponents/NavComponents";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("#876364", "NIKE", 1780, 325, "1,46,660"),
  createData("#876368", "PUMA", 1400, 53, "46,660"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "prodNo",
    numeric: false,
    disablePadding: false,
    label: "Product No",
  },
  {
    id: "prodName",
    numeric: false,
    disablePadding: false,
    label: "Product Name",
  },
  {
    id: "prodPrice ",
    numeric: false,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "prodTotalOrder ",
    numeric: false,
    disablePadding: false,
    label: "Total Order ",
  },
  {
    id: "prodTotalAmount",
    numeric: false,
    disablePadding: false,
    label: "Total Amount",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TransactionTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)),
    [order, orderBy]
  );

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper
        sx={{ width: "100%", mb: 2, boxShadow: "none", paddingLeft: "20px" }}
      >
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{
                      cursor: "pointer",
                      borderBottom: "none",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#F1F4FA",
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      className={styles.transactiontableHeaderName}
                      sx={{
                        borderBottom: "none",
                        boxShadow: "none",
                        textAlign: "center",
                        "&:hover": {
                          backgroundColor: "#F1F4FA",
                        },
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={styles.transactiontableHeaderName}
                      sx={{
                        borderBottom: "none",
                        boxShadow: "none",
                        textAlign: "center",
                        "&:hover": {
                          backgroundColor: "#F1F4FA",
                        },
                      }}
                    >
                      {row.calories}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={styles.transactiontableHeaderName}
                      sx={{
                        borderBottom: "none",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      {row.fat}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={styles.transactiontableHeaderName}
                      sx={{
                        borderBottom: "none",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      <StyledButton
                        variant="contained"
                        btnwidth={"80px"}
                        btnradius={"8px"}
                        bgcolor={"#0D1A26"}
                        tcolor={"white"}
                      >
                        <Typography>{row.carbs}</Typography>
                      </StyledButton>
                    </TableCell>
                    <TableCell
                      align="right"
                      className={styles.transactiontableHeaderName}
                      sx={{
                        borderBottom: "none",
                        boxShadow: "none",
                        textAlign: "center",
                      }}
                    >
                      {row.protein}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
