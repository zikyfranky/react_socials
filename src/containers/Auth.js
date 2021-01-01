import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const Auth = props => {

    const login = ()=>{
        
    }
    const register = ()=>{

    }

    return (
        <Switch>
            <Route path="/auth/login"  exact render={()=><Login login={login}/>}/>
            <Route path="/auth/register"  exact component={()=><Register register={register}/>}/>
        </Switch>

    )
}

export default Auth;