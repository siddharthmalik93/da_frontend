import { Box } from "@mui/material";
import { ListingButtons } from "./ListingButtons";
import ListingDataGrid from './ListingDataGrid';

export const Listing = ({ toggleBulkImport, toggleSingleImport, data, handleDeleteFromList }) => {      
    return (
        <Box sx={{ height:"85vh", backgroundColor: "white"}}>
            <ListingButtons
                toggleBulkImport={toggleBulkImport} 
                toggleSingleImport={toggleSingleImport}
            />
            <ListingDataGrid data={ data } handleDeleteFromList={handleDeleteFromList} />
        </Box>
    );
}
