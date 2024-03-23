import { Snackbar, SnackbarContent } from "@mui/material";
import React from "react";

const SnackbarComp = ({open, setOpen, snackBarMsg, snackBarColor}) => {
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
      };

    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <SnackbarContent style={{backgroundColor: snackBarColor}} message={snackBarMsg} />
        </Snackbar>
    )
}

export default SnackbarComp;