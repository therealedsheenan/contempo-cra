import React from "react";
import { Route, Switch } from "react-router";

import Home from "./components/Home";
import Page1 from "./components/Page1";

const Routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/page1" component={Page1} />
  </Switch>
);

export default Routes;
