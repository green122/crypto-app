import { createActions, handleActions } from "redux-actions";

export const { setListingsMaximum, setPage, setTotalOnPage } = createActions({}, "SET_LISTINGS_MAXIMUM", "SET_PAGE", "SET_TOTAL_ON_PAGE");

export default handleActions(
  {
    [setListingsMaximum]: (state, { payload }) => ({
      ...state,
      maximum: payload
    }),
    [setPage]: (state, { payload }) => ({
      ...state,
      page: payload
    }),
    [setTotalOnPage]: (state, { payload }) => ({
      ...state,
      totalOnPage: payload,
      page: 0
    })
  },
  { maximum: 10, page: 0, totalOnPage: 10 }
);
