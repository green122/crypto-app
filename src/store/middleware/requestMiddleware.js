import { initApp } from "../app";
import { loadListings } from "../listings";
import { setListingsMaximum } from "../filters";

export const requestActions = [
  initApp.toString(),
  setListingsMaximum.toString()
];
export default ({ dispatch }) => next => action => {
  const { type } = action;
  if (requestActions.includes(type)) {
    dispatch(loadListings());
  }
  next(action);
};
