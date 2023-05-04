import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { IModal } from "utils/types";

const Modal = ({
  open,
  handleClose,
  children,
  modelHeader,
  affirmativeActionBtnLabel,
  cancelActionButton,
  handleSubmit,
}: IModal) => {

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            {modelHeader}
          </Typography>
          <DialogActions sx={{ padding: 0 }}>
            <CancelIcon onClick={handleClose} />
          </DialogActions>
        </Box>
        <FormControl
          onSubmit={handleSubmit as () => void}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {children}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem 0",
              columnGap: "1rem",
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              {cancelActionButton}
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
            >
              {affirmativeActionBtnLabel}
            </Button>
          </Box>
        </FormControl>
      </Dialog>
    </Box>
  );
};

export default Modal;

