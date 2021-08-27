import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import movieReducer from "./movieReducer";
import singleReducer from "./singleReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  movieinfo: singleReducer,
  routing: routerReducer
});

export default rootReducer;