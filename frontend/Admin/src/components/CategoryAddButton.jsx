import React from "react";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import CategoryIcon from "@/assets/svg/categoryIcon";
import AddIcon from "@mui/icons-material/Add";
import styles from "./DashboardComponents/dashboard.module.css";
import Link from "next/link";

const CategoryButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      <StyledButton
        variant="contained"
        btnwidth="130px"
        startIcon={<CategoryIcon />}
      >
        <Link
          href={"/products/category"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Typography variant="p" className={styles.reportBtnText}>
            Category
          </Typography>
        </Link>
      </StyledButton>
    </Box>
  );
};

const AddButton = ({ bwidth, path }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      <Link href={path ? path : "/products/addProducts"}>
        <StyledButton
          variant="contained"
          btnwidth={bwidth ? bwidth : "130px"}
          startIcon={<AddIcon />}
          btnpad={"10px"}
        >
          <Typography variant="p" className={styles.reportBtnText}>
            Add
          </Typography>
        </StyledButton>
      </Link>
    </Box>
  );
};

export { CategoryButton, AddButton };
