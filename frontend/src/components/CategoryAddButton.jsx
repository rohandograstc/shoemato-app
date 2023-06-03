import React from "react";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import CategoryIcon from "@/assets/svg/categoryIcon";
import AddIcon from "@mui/icons-material/Add";
import styles from "./DashboardComponents/dashboard.module.css";

const CategoryAddButton = () => {
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
        btnwidth="50%"
        startIcon={<CategoryIcon />}
      >
        <Typography variant="p" className={styles.reportBtnText}>
          Category
        </Typography>
      </StyledButton>
      <StyledButton variant="contained" btnwidth="50%" startIcon={<AddIcon />}>
        <Typography variant="p" className={styles.reportBtnText}>
          Add
        </Typography>
      </StyledButton>
    </Box>
  );
};

export default CategoryAddButton;
