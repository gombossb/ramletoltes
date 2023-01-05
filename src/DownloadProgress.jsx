import { Box, Button, Modal } from "@mui/material";
import React from "react";
import DownloadProgressBar from "./DownloadProgressBar";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {'xs': '90%', 'md': 670},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function DownloadProgress(props){
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        color='success'
        disabled={props.disabled}
      >
        Letöltés
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <h2 id="child-modal-title">Letöltés folyamatban:</h2>
          <DownloadProgressBar btnHandleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
