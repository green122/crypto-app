import { handleActions } from "redux-actions";
import { apiUrl } from "../config/constants";
import { getListingsMaximum } from "./selectors";

export const LOAD_LISTINGS_START = "LOAD_LISTINGS_START";
export const LOAD_LISTINGS_SUCCESS = "LOAD_LISTINGS_SUCCESS";
export const LOAD_LISTINGS_FAIL = "LOAD_LISTINGS_FAIL";

const maxListings = 5000;

export function loadListings(start, limit) {
  return {
    types: [LOAD_LISTINGS_START, LOAD_LISTINGS_SUCCESS, LOAD_LISTINGS_FAIL],
    promise: ({ client }, _, getState) =>
      client.get(`${apiUrl}`, {
        params: { start, limit: getListingsMaximum(getState()) || 'max' }
      })
  };
}

export default handleActions(
  {
    [LOAD_LISTINGS_SUCCESS]: (state, action) => ({
      ...state,
      entries: action.payload
    })
  },
  { entries: [] }
);
