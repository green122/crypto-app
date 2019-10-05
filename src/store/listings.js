import { handleActions } from "redux-actions";
import { result } from "../fixture";

export const LOAD_LISTINGS_START = "LOAD_LISTINGS_START";
export const LOAD_LISTINGS_SUCCESS = "LOAD_LISTINGS_SUCCESS";
export const LOAD_LISTINGS_FAIL = "LOAD_LISTINGS_FAIL";

const maxListings = 5000;

export function loadListings(start = 0, end = maxListings) {
  return {
    types: [LOAD_LISTINGS_START, LOAD_LISTINGS_SUCCESS, LOAD_LISTINGS_FAIL],
    promise: () => Promise.resolve(result)
    //   promise: ({ client }, getState) => client.get(`${schoolsAroundRoute}/${lat}/${lon}`, { params: { mlsNames: getMlsNames(getState()) } })
  };
}

export default handleActions(
  {
    [LOAD_LISTINGS_SUCCESS]: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  {}
);
