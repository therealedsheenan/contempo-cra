import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import sampleReducer from "./modules/sample/reducer";

const reducers = combineReducers({
  routing: routerReducer,
  sampleReducer
});

export default reducers;
