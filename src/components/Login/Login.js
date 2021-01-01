import React from "react";

const Login = props => {
    return(
        <form>
            <input type="text" placeholder="username" name="username"/>
            <input type="password" placeholder="********"  name="password"/>
            <button>Log In</button>
        </form>
    )
}

export default Login;