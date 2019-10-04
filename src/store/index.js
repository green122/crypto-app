import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import listings from "./listings";
import fetchMiddleware from "./middleware/fetchMiddleware";

export function getStore(client) {
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({ listings }),   
    composeEnhancer(applyMiddleware(fetchMiddleware({ client })))
  );
  return store;
}
