import React from "react";
import { Signin } from "./Signin";
import Stack from "@mui/material/Stack";
import loginIMG from "../../public/assets/images/login.jpg"
import "./Login.css";

export const Login = ({ setToken }) => {
    return (
      <Stack direction="row" sx={{ height: "100vh", backgroundColor: "#bfc4c8" }}>
        <Stack direction="column" style={{ width: "50%", paddingLeft:"5%", paddingTop:"1%"}}>
          <h5>Company Name</h5>
          <h1>Headline</h1>
          <h2>Sub heading</h2>
          <img src={loginIMG} style={{ width:"85%", borderRadius:"10px" }}/>
        </Stack>
        <Stack direction="column" style={{ width: "50%", paddingTop:"6%", textAlign:"center"}}>
          <h1>Login</h1>
          <h5>This is Login</h5>
          <div style={{ backgroundColor:"gray", marginRight:"15%", marginLeft:"15%", paddingTop:"10%", backgroundColor:"white",  borderRadius:"10px"}}>
            <Signin setToken={setToken} />
          </div>
        </Stack>
      </Stack>
);
}
