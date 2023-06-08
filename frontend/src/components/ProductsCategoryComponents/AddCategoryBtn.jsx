import { AddButton } from "@/styledComponents/AddButton";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";
import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "../DashboardComponents/dashboard.module.css";
import AddCategoryModal from "./addCategoryModal";

const AddCategoryBtn = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      >
        <AddButton>
          <StyledButton
            variant="contained"
            btnwidth={"100px"}
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            <Typography variant="p" className={styles.reportBtnText}>
              Add
            </Typography>
          </StyledButton>
        </AddButton>
      </Box>
      <AddCategoryModal open={open} handleClose={handleClose} />
    </>
  );
};

export default AddCategoryBtn;
