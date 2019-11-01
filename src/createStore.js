import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { homeReducer } from "./reducers/Home";

export default function createStore() {
  const store = reduxCreateStore(
    combineReducers({
      todo: homeReducer,
    }),
    applyMiddleware(
      logger,
    )
  );

  return store;
}