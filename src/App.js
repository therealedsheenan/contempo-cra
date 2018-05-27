import React from "react";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Routes from "./routes";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Contepo-cra!</h1>
    </header>
    <p className="App-intro">Boilerplate using react-create-app</p>
    <nav>
      <Router>
        <React.Fragment>
          <RouterLink to="/page1">page-1</RouterLink>
          <RouterLink to="/">home</RouterLink>
          <Routes />
        </React.Fragment>
      </Router>
    </nav>
  </div>
);

export default App;
