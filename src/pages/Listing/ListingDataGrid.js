import "./Listing.css";
import React, { useState } from "react";
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
} from '@mui/x-data-grid';
import { styled } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LinkIcon from '@mui/icons-material/Link';
import { RiNewspaperFill } from "react-icons/ri";
import Box from '@mui/material/Box';
import { STATUS } from "../../DataTypes/DataTypes";
import { InputDialogBox } from "../../components/DialogBox/InputDialogBox";


function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

const Small = styled('small')(({ bgcolor }) => ({
    width: 60,
    height: 15,
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    overflow: 'hidden',
    background: bgcolor,
    textAlign: "center",
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));

export default function ListingDataGrid({ data, handleDeleteFromList }) {
    const [rows, setRows] = useState(data);
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteDialogContent, setDeleteDialogContent] = useState("");
    const [recordToDelete, setRecordToDelete] = useState();

    const handleDeleteDialog = (data) => {
        setOpenDialog(true);
        setDeleteDialogContent(`record with name '${data.name}' would be removed permanently`)
        setRecordToDelete(data);
    };

    const handleDeleteAfterUserConfirms = (value) => {
        if (value === "delete") {
            setOpenDialog(false);
            handleDeleteFromList(recordToDelete);
            setRecordToDelete(null);
            alert("Record deleted")
        } else {
            setOpenDialog(false);
            alert("Record not deleted")
            setRecordToDelete(null);
        }
    }

    // TO DO
    const handleLink = (id) => {
    };

    // TO DO
    const handleDegree = (id) => {
    };

    const renderStatus = (params) => {
        return (
            params.row.status === STATUS.Completed ?
                <Small bgcolor={"green"}>Completed</Small> :
                <Small bgcolor={"gray"}>Pending</Small>
        );
    };
    
    const renderAction = (params) => {
        return (
           params.row.status === STATUS.Completed ?
            <>
                <LinkIcon
                    className="linkBtn"
                    onClick={() => {
                        handleLink(params.row.id);
                    }}
                />
                <DeleteOutlineIcon
                    className="deteleBtn"
                    onClick={() => {
                        handleDeleteDialog(params.row);
                    }}
                />
            </> :
            <RiNewspaperFill 
                className="degreeBtn"
                onClick={() => {
                    handleDegree(params);
                }}
            />
        );
    };

    const columns = [
        { field: 'id', headerName: 'S.no', flex: 0.5, headerAlign: "left", headerClassName: "columnHeader" },
        { field: 'name', headerName: 'Name', flex: 1, headerAlign: "left", headerClassName: "columnHeader" },
        { field: 'createdAt', headerName: 'Created at', flex: 1.25, headerAlign: "left", headerClassName: "columnHeader" },
        { field: 'updatedAt', headerName: 'Updated at', flex: 1.25, headerAlign: "left", headerClassName: "columnHeader" },
        { field: 'status', headerName: 'Status', flex: 1, renderCell: renderStatus, headerClassName: "columnHeader" },
        { field: "action", headerName: "Action", flex: 1, renderCell: renderAction, headerClassName: "columnHeader" },
    ];

    return (
        <Box
            sx={{
                '& .columnHeader': {
                    backgroundColor: '#c7cfd6',
                },
                m: 1
            }}
        >
            <DataGrid
                sx={{ backgroundColor: "white", width:"99%" }}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                slots={{
                    toolbar: CustomToolbar,
                }}
            />
            <InputDialogBox open={openDialog}
                operationName="Delete" 
                inputLabel="type 'delete' here to revoke record"
                dialogContent={deleteDialogContent}
                dialogTitle="Delete record"
                onClose={handleDeleteAfterUserConfirms}
                handleCancel={() => setOpenDialog(false)}
            />
        </Box>
    );
}
