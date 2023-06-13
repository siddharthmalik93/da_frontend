import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const FileUploadButtons = ({ closeUpload, onClearAll, isDisabled, onSubmit }) => {
    return (
        <Stack spacing={2} direction="row" sx={{m:3}}>
            <Button variant="outlined" onClick={closeUpload}>Cancel</Button>
            <Button variant="contained" disabled={isDisabled} onClick={onSubmit}>Submit</Button>
            <Button variant="contained" disabled={isDisabled} onClick={onClearAll}>Clear files</Button>
        </Stack>
    );
}
