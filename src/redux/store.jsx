import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";
const rootReducer = combineReducers({
  movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
