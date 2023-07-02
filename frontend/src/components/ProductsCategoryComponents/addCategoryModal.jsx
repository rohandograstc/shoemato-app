import React from "react";
import Image from "next/image";

//MUI Imports
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CellTypo } from "@/styledComponents/CellTypo";
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment, OutlinedInput, Typography } from "@mui/material";

// Styled Components
import { StyledButton } from "@/styledComponents/StyledBtn";

// Assets
import BrowseIcon from "@/assets/svg/browseIcon";
import RightArrow from "@/assets/svg/rightArrow";
import crossIconModal from "../../assets/svg/crossIconModal.svg";

import styles from "./prodCategory.module.css";
import {
  headingStyle,
  paraStyle,
  subHeadingStyle,
} from "@/globalStyles/typoStyles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "15px",
  paddingTop: "15px",
  outline: "none",
  borderRadius: "10px",
  textAlign: "center",
};

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};

const AddCategoryModal = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": overlayStyle,
        }}
      >
        <Box sx={style}>
          <Typography
            variant="h5"
            sx={{
              marginBottom: "20px",
              ...paraStyle,
              fontSize: "27px",
              color: "#525252",
            }}
          >
            Category Details
          </Typography>
          <Box className={styles.innerDivStyle}>
            <OutlinedInput
              className={styles.inputStyle}
              id="outlined-adornment-name"
              placeholder="Category Name"
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon sx={{ color: "#000000" }} />
                </InputAdornment>
              }
              inputProps={{
                "aria-label": "name",
              }}
            />
            <OutlinedInput
              className={styles.inputStyle}
              id="outlined-adornment-name"
              placeholder="Brand Name"
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon sx={{ color: "#000000" }} />
                </InputAdornment>
              }
              inputProps={{
                "aria-label": "Brand-name",
              }}
            />
            <OutlinedInput
              className={styles.inputStyle}
              id="outlined-adornment-name"
              placeholder="Type"
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon sx={{ color: "#000000" }} />
                </InputAdornment>
              }
              inputProps={{
                "aria-label": "type",
              }}
            />
            <OutlinedInput
              className={styles.inputStyle}
              id="outlined-adornment-name"
              placeholder="Vendor ID"
              endAdornment={
                <InputAdornment position="end">
                  <CloseIcon sx={{ color: "#000000" }} />
                </InputAdornment>
              }
              inputProps={{
                "aria-label": "vendor-id",
              }}
            />
          </Box>
          <Box className={styles.imageDiv}>
            <Typography variant="h6" sx={headingStyle}>
              Image :{" "}
            </Typography>
            <StyledButton
              variant="contained"
              btnwidth={"150px"}
              btnpad={"10px 9px"}
              btnradius={"10px"}
              startIcon={<BrowseIcon />}
            >
              <Typography sx={subHeadingStyle}>Browse</Typography>
            </StyledButton>
          </Box>
          <StyledButton
            variant="contained"
            btnwidth={"100%"}
            btnpad={"15px 20px"}
            btnradius={"10px"}
            endIcon={<RightArrow />}
            sx={{
              justifyContent: "space-between",
              "& .MuiButton-endIcon": {
                marginLeft: "auto",
              },
            }}
          >
            <Typography variant="p" sx={subHeadingStyle}>
              ADD
            </Typography>
          </StyledButton>

          <Image
            alt={"CrossIcon"}
            src={crossIconModal}
            className={styles.crossIconStyle}
            onClick={props.handleClose}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
