import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import firebase from "firebase/app";

const Auth = props => {

    const login = (e)=>{
        e.preventDefault();
        firebase.app().auth().signInWithEmailAndPassword("email@email.com", "password")
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
    }
    const register = (e)=>{
        e.preventDefault();
        firebase.app().auth().createUserWithEmailAndPassword("email@email.com", "password")
        .then((user) => {
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            // ..
        });
    }

    return (
        <Switch>
            <Route path="/auth/login"  exact render={()=><Login login={login}/>}/>
            <Route path="/auth/register"  exact component={()=><Register register={register}/>}/>
        </Switch>

    )
}

export default Auth;