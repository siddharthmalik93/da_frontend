import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { UserOperationHeading } from "../../components/Header/UserOperationHeading"
import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { FileUpload} from '../../components/FileUpload/FileUpload';
import { FileUploadButtons } from '../../components/FileUpload/FileUploadButtons';
import { ConfirmDialogBox } from "../../components/DialogBox/ConfirmDialogBox";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

let files = [];

export const SingleImport = ({toggleSingleImport}) => {
    const [value, setValue] = useState(0);
    const [isDisabled, setDisabled] = useState(files.length ? false : true);
    const [openDialog, setOpenDialog] = React.useState(false);
    const dialogBoxIcon = <WorkspacePremiumIcon fontSize="large" sx={{ ml:"45%"}} />;

    const handleFileUpload = (event) => {
        files[0] = event.target.files[0].name;

        setValue(files.length);

        if (files.length) {
            setDisabled(false);
        }
    };

    const handleClearAll = () => {
        files = [];
        setDisabled(true);
    };

    const redirectToListing = () => {
        toggleSingleImport();
    };

    const handleOnSubmitDialogBox = () => {
        setOpenDialog(!openDialog);
        files = [];
        redirectToListing();
    };

    const getDialogBoxContent = () => {
        return 'Degree has been stored over blockchain';
    };

    const handleSubmit = () => {
        setOpenDialog(!openDialog);
    };

    return (
        <Box>
            <UserOperationHeading title="Add Information"/>
            <Stack item direction="column" sx={{ height:"78vh", backgroundColor: "white"}}>
                <TextField fullWidth={false} sx={{ m:4, width: "40%" }} id="outlined-basic" label="Name" variant="outlined" />
                <FileUpload onFileChoose={handleFileUpload} filesUploaded={files} fileType=".pdf"/>
                <TextField fullWidth={false} sx={{ m:4, width: "40%" }} label="Other details" variant="outlined" />
                <FileUploadButtons
                    onClearAll={handleClearAll}
                    closeUpload={redirectToListing}
                    isDisabled={isDisabled}
                    onSubmit={handleSubmit}
                />
            </Stack>
            <ConfirmDialogBox
                open={openDialog}
                icon={dialogBoxIcon}
                dialogContent={getDialogBoxContent()}
                handleClickConfirmation={handleOnSubmitDialogBox}
            />
        </Box>
    );  
}
