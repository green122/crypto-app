import { handleActions } from "redux-actions";
import { apiUrl } from "../config/constants";
import { getListingsMaximum } from "./selectors";

export const LOAD_LISTINGS_START = "LOAD_LISTINGS_START";
export const LOAD_LISTINGS_SUCCESS = "LOAD_LISTINGS_SUCCESS";
export const LOAD_LISTINGS_FAIL = "LOAD_LISTINGS_FAIL";

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
    [LOAD_LISTINGS_START]: state => ({...state, loading: true, loaded:false, error: false}),
    [LOAD_LISTINGS_FAIL]: state => ({...state, loading: false, loaded:false, error: true}),
    [LOAD_LISTINGS_SUCCESS]: (state, action) => ({
      ...state,
      entries: action.payload,
      loading: false,
      error: false,
      loaded: true
    })
  },
  { entries: [], loading: false, laoded: false, error: false }
);
