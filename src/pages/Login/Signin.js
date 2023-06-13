import React from "react";
import { useState } from "react";

const EMAIL = "user@user.com";
const PASSWORD = "1234";

export const TOKEN = {
    KEY: "token",
    VAL: "dksjfvnr"
};

export const Signin = ({ setToken }) => {
    const [email, setEmail] = useState();  
    const [password, setPassword] = useState();  
    // const [error, setError] = useState("");

    const handleChange = (event) => {
        let target = event.target;

        if (target.name === "email") {
            setEmail(target.value);
        } else if (target.name === "password") {
            setPassword(target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email == null || password == null) {
            alert("Fields are required");
            return;
        }

        if (validateUser({email, password})) {
            localStorage.setItem(TOKEN.KEY, TOKEN.VAL);
            setToken(TOKEN.VAL);
        } else {
            alert("Invalid creds");
            return;
        }
    };

    const validateUser = (creds) => {
        if (creds.email === EMAIL && creds.password === PASSWORD) {
            return true;
        }

        return false;
    };

    return (
        <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
                <div className="formField">
                    <label className="formFieldLabel" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="formFieldInput"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="formField">
                    <label className="formFieldLabel" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="formFieldInput"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <div className="formField">
                    <button className="formFieldButton">Sign In</button>
                </div>

                {/* {error && (
                    <Alert severity="error" onClick={() => setError(null)}>
                        {props.error || error}
                    </Alert>
                )} */}
            </form>
        </div>
    );
}
