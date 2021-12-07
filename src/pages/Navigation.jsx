import React from "react";
import DineMenu from "./DineMenu";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import SetDine from "./SetDine";
import Menu from "./Menu";
import OrderPage from "./OrderPage";
import Test from "./Test";
// import Order from "./order/Order";

const Navigation = () => {
  return (
    <React.Fragment>
      <Switch>
        {/* <Route path="/order">
            <Order />
          </Route> */}
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/home">
          <OrderPage />
        </Route>
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
