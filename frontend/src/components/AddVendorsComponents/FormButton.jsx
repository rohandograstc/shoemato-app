import { HeadingTypo } from "@/styledComponents/HeadingTypo";
import { StyledButton } from "@/styledComponents/StyledBtn";
import { Box } from "@mui/material";

import styles from "./addVendor.module.css";

const FormButton = () => {
  return (
    <Box className={styles.inputFieldCon}>
      <StyledButton
        btnradius={"10px"}
        variant="contained"
        btnwidth={"200px"}
        btnpad={"10px"}
        sx={{ marginTop: "20px" }}
      >
        <HeadingTypo variant="p" fsize={"14px"}>
          SAVE
        </HeadingTypo>
      </StyledButton>
      <StyledButton
        btnradius={"10px"}
        variant="contained"
        btnwidth={"200px"}
        btnpad={"10px"}
        bgcolor={"white"}
        tcolor={"black"}
        style={{
          border: "1px solid black",
          boxShadow: "none",
        }}
      >
        <HeadingTypo variant="p" fsize={"14px"}>
          Discard
        </HeadingTypo>
      </StyledButton>
    </Box>
  );
};

export default FormButton;
