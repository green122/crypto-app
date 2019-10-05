import { createActions, handleActions } from "redux-actions";

export const { setListingsMaximum } = createActions({}, "SET_LISTINGS_MAXIMUM");

export default handleActions(
  {
    [setListingsMaximum]: (state, payload) => ({ ...state, maximum: payload })
  },
  { maximum: 20 }
);
