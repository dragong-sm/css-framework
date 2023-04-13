import React, { useState } from "react";
import {
  Box,
  Fab,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";

export default function Create() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip title="create" sx={{ position: "fixed", bottom: 50, right: 50 }}>
        <IconButton>
          <Fab color="secondary">
            <Edit onClick={handleOpen} />
          </Fab>
        </IconButton>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6">
            Text in a modal
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Text in a modal, Text in a modal, Text in a modal
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  tranform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
