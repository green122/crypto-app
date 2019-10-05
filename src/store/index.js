import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import listings from "./listings";
import filters from "./filters";
import fetchMiddleware from "./middleware/fetchMiddleware";
import handleFetchedData from "./middleware/handleFetchedData";
import requestMiddleware from "./middleware/requestMiddleware";

export function getStore(client) {
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({ listings, filters }),   
    composeEnhancer(applyMiddleware(fetchMiddleware({ client }), handleFetchedData, requestMiddleware ))
  );
  return store;
}
