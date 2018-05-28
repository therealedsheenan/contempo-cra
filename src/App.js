import React from "react";
import { Provider } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

import logo from "./logo.svg";
import "./App.css";

import routes from "./routes";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Contepo-cra!</h1>
          <p className="App-intro">Boilerplate using react-create-app</p>
        </header>
        <main id="main">
          <nav>
            <React.Fragment>
              <RouterLink to="/page1">page-1</RouterLink>
              <RouterLink to="/">home</RouterLink>
            </React.Fragment>
          </nav>
          {routes}
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;

/* <div className="App">


        <nav>
          <Router>
            <React.Fragment>
              <RouterLink to="/page1">page-1</RouterLink>
              <RouterLink to="/">home</RouterLink>
              <Routes />
            </React.Fragment>
          </Router>
        </nav>
      </div> */
