import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Auth"

class App extends Component {
  
  render(){

    return(
      <Switch>
        <Route path="/" exact />
        <Route path="/auth/:page" component={Auth} />
      </Switch>
    )
  }
}

export default App;