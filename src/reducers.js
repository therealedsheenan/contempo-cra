import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case "TEST":
      return state;
    default:
      return state;
  }
};

const reducers = combineReducers({
  routing: routerReducer
});

export default reducers;
