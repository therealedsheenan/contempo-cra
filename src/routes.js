import React from "react";
import { Route } from "react-router-dom";

import Home from "./components/Home";
import Page1 from "./components/Page1";

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/page1" component={Page1} />
  </div>
);

export default Routes;
