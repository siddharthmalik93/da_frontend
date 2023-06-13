import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AddIcon from "@mui/icons-material/Add";
import { UserOperationHeading } from "../../components/Header/UserOperationHeading"

export const ListingButtons = ({toggleBulkImport, toggleSingleImport}) => {
  return (
      <Stack direction="row" spacing={2}
        sx={{
          display: 'flex',
          paddingRight: '24px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <UserOperationHeading title="Listings"/>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" endIcon={<DriveFolderUploadIcon/>} onClick={toggleBulkImport}>
                Bulk Import
            </Button>
            <Button variant="outlined" endIcon={<AddIcon />}  onClick={toggleSingleImport}>
                New
            </Button>
          </Stack>
    </Stack>
  );
}
