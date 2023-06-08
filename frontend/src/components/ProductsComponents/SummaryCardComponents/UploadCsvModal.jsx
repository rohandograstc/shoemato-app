import * as React from "react";
import Box from "@mui/material/Box";
import uploadCSVIconGray from "../../../assets/svg/uploadCSVIconGray.svg";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import styles from "../product.module.css";
import { CellTypo } from "@/styledComponents/CellTypo";
import { StyledButton } from "@/styledComponents/StyledBtn";
import BrowseIcon from "@/assets/svg/browseIcon";

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
  padding: " 30px 40px",
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
              <CellTypo variant="span" fheight={"140%"} fsize={"23px"}>
                Drag & Drop
              </CellTypo>
            </Box>
            <CellTypo variant="span" fheight={"140%"} fsize={"16px"}>
              or
            </CellTypo>
            <StyledButton
              variant="contained"
              btnwidth={"130px"}
              btnpad={"7px 5px"}
              btnradius={"10px"}
              startIcon={<BrowseIcon />}
            >
              <CellTypo
                variant="p"
                fheight={"20px"}
                fsize={"14px"}
                fweight={"600"}
                fcolor="white"
              >
                Browse
              </CellTypo>
            </StyledButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadCsvModal;
