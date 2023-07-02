import * as React from "react";
import Box from "@mui/material/Box";
import uploadCSVIconGray from "../../../assets/svg/uploadCSVIconGray.svg";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import styles from "../product.module.css";
import { StyledButton } from "@/styledComponents/StyledBtn";
import BrowseIcon from "@/assets/svg/browseIcon";
import { Typography } from "@mui/material";
import { headingStyle, inputStyle, paraStyle } from "@/globalStyles/typoStyles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "10px",
  outline: "none",
  borderRadius: "10px",
};

const innerDivStyle = {
  border: "3px dashed #0D1A26",
  borderRadius: "10px",
  padding: " 60px 40px",
  display: "flex",
  alignItems: "center",
  gap: "25px",
};

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};

const UploadCsvModal = (props) => {
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
          <Box sx={innerDivStyle}>
            <Box className={styles.modalContentLeft}>
              <Image src={uploadCSVIconGray} alt="uploadCSVIcon" />
              <Typography
                variant="span"
                sx={{ ...headingStyle, fontSize: "23px", lineHeight: "140%" }}
              >
                Drag & Drop
              </Typography>
            </Box>
            <Typography
              variant="span"
              sx={{ ...inputStyle, lineHeight: "140%" }}
            >
              or
            </Typography>
            <StyledButton
              variant="contained"
              btnwidth={"130px"}
              btnpad={"7px 5px"}
              btnradius={"10px"}
              startIcon={<BrowseIcon />}
            >
              <Typography sx={{ ...paraStyle, color: "white" }} variant="p">
                Browse
              </Typography>
            </StyledButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadCsvModal;
