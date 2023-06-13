import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { FileUpload } from '../../components/FileUpload/FileUpload';
import { UserOperationHeading } from "../../components/Header/UserOperationHeading"
import { FileUploadButtons } from '../../components/FileUpload/FileUploadButtons';
import { ConfirmDialogBox } from "../../components/DialogBox/ConfirmDialogBox";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

let files = [];

export default function BulkImport({ toggleBulkImport, handleBulkImportSubmit }) {
    const [value, setValue] = useState(0);
    const [openDialog, setOpenDialog] = React.useState(false);

    const [isDisabled, setDisabled] = useState(files.length ? false : true);
    const dialogBoxIcon = <CloudUploadIcon fontSize="large" sx={{ ml:"45%"}} />;

    const handleFileUpload = (event) => {
        files.push(event.target.files[0].name);

        setValue(files.length);

        if (files.length) {
            setDisabled(false);
        }
    };

    const handleClearAll = () => {
        files = [];
        setDisabled(true);
    };

    const onBulkImportSubmit = () => {
        setOpenDialog(true);
    };

    const redirectToListing = () => {
        toggleBulkImport();
    }

    const handleDialogBoxSubmit = () => {
        setOpenDialog(false);
        handleBulkImportSubmit(files);
        files = [];
        redirectToListing();
    };

    const getDialogBoxContent = () => {
        return `${files.length } file${(files.length > 1 ? 's': '')} Imported successfully`
    };

    return (
        <div>
            <UserOperationHeading title="Bulk Import"/>
            <Grid container sx={{height:"50vh", backgroundColor: "white" }} direction="column">
                <FileUpload onFileChoose={handleFileUpload} filesUploaded={files} fileType=".csv"/>
                <FileUploadButtons
                    onClearAll={handleClearAll}
                    closeUpload={redirectToListing}
                    isDisabled={isDisabled}
                    onSubmit={onBulkImportSubmit}
                />
            </Grid>
            <ConfirmDialogBox
                open={openDialog}
                icon={dialogBoxIcon}
                dialogContent={getDialogBoxContent()}
                handleClickConfirmation={handleDialogBoxSubmit}
            />
        </div>
    );
}
