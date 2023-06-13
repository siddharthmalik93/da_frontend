import './Sidebar.css';
import {
  Sidebar,
  Menu,
  MenuItem
} from "react-pro-sidebar";
import { FaCog } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { AiFillDashboard } from "react-icons/ai";
import { RiNewspaperFill } from "react-icons/ri";
import { TOKEN } from "../Login/Signin";

export const SidebarNavigation = ({showSideBar, setToken }) => {
    return (
        <Sidebar rootStyles={{ height: "90vh" }} collapsed={showSideBar} style={{ backgroundColor:"white" }}>
            <Menu>
                <MenuItem icon={<AiFillDashboard />} href="/">
                    Dashboard
                </MenuItem>
                <MenuItem icon={<RiNewspaperFill />} href="/degree">
                    Degree
                </MenuItem>
                <MenuItem icon={<FaCog />}>
                    Settings
                </MenuItem>
                <MenuItem icon={<GoSignOut />} rootStyles={{ position: "absolute", bottom: "0vh", backgroundColor: "#c7cfd6" }}
                    onClick={() => { localStorage.removeItem(TOKEN.KEY); setToken(null) }}>
                    Logout
                </MenuItem>
            </Menu>
        </Sidebar>
    );
}
