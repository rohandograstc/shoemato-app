import { StyledButton } from "@/styledComponents/StyledBtn";
import { Box, Typography } from "@mui/material";

import styles from "./addVendor.module.css";
import { subHeadingStyle } from "@/globalStyles/typoStyles";

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
        <Typography variant="p" sx={subHeadingStyle}>
          SAVE
        </Typography>
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
        <Typography variant="p" sx={subHeadingStyle}>
          Discard
        </Typography>
      </StyledButton>
    </Box>
  );
};

export default FormButton;
