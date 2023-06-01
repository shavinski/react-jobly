import React from "react";
import LoginForm from "./LoginForm";

/** Renders login page
 * 
 * Props:
 * - Login function
 * 
 * RoutesList -> Login
 */

function Login({login}) {

    return (
        <div>
            Log in
            <LoginForm login={login}/>
        </div>
    )
}

export default Login;