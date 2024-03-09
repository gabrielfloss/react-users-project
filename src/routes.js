import React from "react";
import Home from "./Pages/Home"
import Users from "./Pages/Users"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function Routes(){
       return(
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/usuarios" component={Users}/>
        </Switch>
    </Router>

);
};



export default Routes;