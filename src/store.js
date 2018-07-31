import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
);
