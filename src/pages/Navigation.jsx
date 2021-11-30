import React from "react";
import DineMenu from "./DineMenu";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SetDine from "./SetDine";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <React.Fragment>
     
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/set-dine">
            <SetDine />
          </Route>
          <Route path="/dine-menu">
            <DineMenu />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
   
    </React.Fragment>
  );
};

export default Navigation;
