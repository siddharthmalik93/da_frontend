import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const InputDialogBox = ({
    open, operationName, inputLabel, dialogContent, dialogTitle, onClose, handleCancel}) => {

  const [inputVal, setinputVal] = React.useState();
  const handleClose = () => {
    onClose(inputVal);
    setinputVal(null);
  };

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogContent}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={inputVal}
            label={inputLabel}
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) => { setinputVal(event.target.value); }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{operationName}</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>
  );
}
