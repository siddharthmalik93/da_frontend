import { useState } from "react";
import { Listing } from "./Listing/Listing";
import BulkImport from './BulkImport/BulkImport';
import { SingleImport } from "./SingleImport/SingleImport";
import { Box } from "@mui/material";
import { STATUS } from "../DataTypes/DataTypes";

export const Degree = () => {  
  let data = [
    { id: 1, name: 'Abc', createdAt: new Date().toLocaleString(), updatedAt: new Date().toLocaleString(), status: STATUS.Pending},
    { id: 2, name: 'Aasdasdadsbc', createdAt: new Date().toLocaleString(), updatedAt: new Date().toLocaleString(), status: STATUS.Completed},
  ];
  const [rows, setRows] = useState(data);  
  
  const [showBulkImport, setBulkImportToggle] = useState(false);  
  const [showSingleImport, setSingleImportToggle] = useState(false);  

  const toggleBulkImport = () => {
    setBulkImportToggle(!showBulkImport);
  };

  const toggleSingleImport = () => {
    setSingleImportToggle(!showSingleImport);
  };

  const handleBulkImportSubmit = (files) => {
    let temp = files.map((name, index) => {
        return {
          id: rows.length + 1 + index,
          name,
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          status: STATUS.Pending
        };
      });

      setRows((currRows) => {
        return [...currRows, ...temp];
      });
  };

  const handleSingleImportSubmit = () => {

  };

  // TO DO
  const handleDeleteFromList = (data) => {

  };

  return (
    <Box>
        { showBulkImport ?
            <BulkImport
              toggleBulkImport={ toggleBulkImport }
              handleBulkImportSubmit={ handleBulkImportSubmit }
            /> :
          showSingleImport ?
            <SingleImport
              toggleSingleImport={ toggleSingleImport }
              handleSingleImportSubmit={ handleSingleImportSubmit }              
            /> :
            <Listing
              toggleBulkImport={ toggleBulkImport }
              toggleSingleImport={ toggleSingleImport }
              handleDeleteFromList={ handleDeleteFromList }
              data={rows}
            />
        }
    </Box>
  );
}
