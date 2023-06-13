import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import FileListItem from './FileListItem';

export const FileUpload = ({ onFileChoose, filesUploaded, fileType }) => {
    const generateListItem = () => {
        return filesUploaded.map((value) =>
            React.cloneElement(<FileListItem filename={value}/>, { key: value }),
        );
    };

    return (
        <Stack spacing={2} sx={{ m: 3 }} xs={12} md={6} direction="row">
            <List sx={{ width:"50%", maxHeight: 200, minHeight:200, overflow: 'auto', backgroundColor: "#F5F5F5"}}>
                {generateListItem()}
            </List>
            <input
                id="file-input"
                type="file"
                multiple
                accept={fileType} // ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={onFileChoose}
                style={{
                    display: "none"
                }}
            />
            <label htmlFor="file-input">
                <Button variant="contained" color="primary" component="span">
                    Choose a file
                </Button>
                <h5>( {fileType} only)</h5>
            </label>
        </Stack>
    );
}
