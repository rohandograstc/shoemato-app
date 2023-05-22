import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import UserModalContent from "./UserModalContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  gap:"10px",
  borderRadius: "10px",
  padding : "17px"
};

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};

function UserInfoModal(props) {
  return (
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
        <UserModalContent title={"NEW USERS"} />
        <UserModalContent title={"EXISTING USERS"} />
      </Box>
    </Modal>
  );
}

export default UserInfoModal;
