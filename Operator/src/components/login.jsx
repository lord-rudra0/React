import React from "react";
// import Input from "./input";

function Login()
{
    return   <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            </form>
}

export default Login;