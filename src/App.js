import './App.css';
import { useState } from "react";
import LogoHeader from "./pages/Sidebar/SidebarHeader";
import TopHeader from './components/Header/Header';
import { SidebarNavigation } from "./pages/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Degree } from "./pages/Degree";
import { Box } from "@mui/material";
import { Login } from "./pages/Login/Login";
import { TOKEN } from "./pages/Login/Signin";

export default function App() {
  const [showSideBar, setSideBarToggle] = useState(false);
  const [token, setToken] = useState(localStorage.getItem(TOKEN.KEY));

  if(token !== TOKEN.VAL) {
    return (<Login setToken={setToken} />);
  }

  const toggleSideBar = () => {
    setSideBarToggle(!showSideBar);
  };

  return (
    <div style={{ display: "flex" }}>
        <BrowserRouter>
          <div style={{ backgroundColor:"#949da5" }} >
            <LogoHeader toggleSideBar={toggleSideBar} />
            <SidebarNavigation showSideBar={showSideBar} setToken={setToken} />
          </div>
          <div style={{ width: "100%", paddingTop:"50px" ,backgroundColor: "#bfc4c8"}}>
            <TopHeader />
            <Box sx={{ height:"84vh", m:4, backgroundColor: "#e1e5e8"}}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/degree" element={<Degree />} />
              </Routes>
            </Box>
          </div>
        </BrowserRouter>
    </div>
  );
}
