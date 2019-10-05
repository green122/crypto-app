import { createActions, handleActions } from "redux-actions";

export const { setListingsMaximum, setPage } = createActions({}, "SET_LISTINGS_MAXIMUM", "SET_PAGE");

export default handleActions(
  {
    [setListingsMaximum]: (state, { payload }) => ({
      ...state,
      maximum: payload
    }),
    [setPage]: (state, { payload }) => ({
      ...state,
      page: payload
    })
  },
  { maximum: 10, page: 0 }
);
