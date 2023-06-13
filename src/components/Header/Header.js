import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function TopHeader() {
  return (
    <Box style={{ position: "absolute", top: "0px", right: "0px"}}>
        <IconButton type="button" size="large">
          <SearchIcon />
        </IconButton>
        <IconButton size="large">
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton size="large">
          <PersonOutlinedIcon />
        </IconButton>
    </Box>
  );
};
