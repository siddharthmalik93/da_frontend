import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const ConfirmDialogBox = ({open, dialogTitle, dialogContent,
icon, handleClickConfirmation}) => {
  return (
      <Dialog
        open={open}
        onClose={handleClickConfirmation}
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        {icon}
        <DialogContent>
          <DialogContentText>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{justifyContent:"center"}}>
          <Button variant="contained" onClick={handleClickConfirmation}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
  );
}
