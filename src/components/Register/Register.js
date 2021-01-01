import React from "react";

const Register = props => {
    return(
        <form>
            <input type="text" placeholder="username"  name="username"/>
            <input type="password" placeholder="********"  name="password"/>
            <button>Register</button>
        </form>
    )
}

export default Register;