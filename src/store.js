import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

export const history = createHistory();

// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   let composeEnhancers = compose;
//   const middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));
//   if (process.env.NODE_ENV !== "production") {
//     const composeWithDevToolsExtension =
//       // eslint-disable-next-line
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//     if (typeof composeWithDevToolsExtension === "function") {
//       composeEnhancers = composeWithDevToolsExtension;
//     }
//   }
//   const store = createStore(reducers, composeEnhancers(middleware));
//   sagaMiddleware.run(sagas);
//   // if (module.hot) {
//   //   module.hot.accept("./reducers", () => {
//   //     // eslint-disable-next-line
//   //     store.replaceReducer(require("./reducers").default);
//   //   });
//   // }
//   return store;
// };

// export default configureStore;

const appRouterMiddleware = routerMiddleware(history);

const store = createStore(reducers, applyMiddleware(appRouterMiddleware));

export default store;
