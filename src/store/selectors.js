import { createSelector } from "reselect";
import { mapFetchedDataToView } from "../utils/mapping";

export const getListingsMaximum = state => state.filters.maximum;
export const getCurrentPage = state => state.filters.page;
export const getTotalOnPage = state => state.filters.totalOnPage;

export const getAllListings = createSelector(
  state => state.listings,
  listings => listings.entries
);

export const getListings = createSelector(
  getAllListings,
  getCurrentPage,
  getTotalOnPage,
  (listings, page, totalOnPage) => {
    return listings.slice(page * totalOnPage, (page + 1) * totalOnPage) || [];
  }
);

export const getListingsToView = createSelector(
    getListings,
  (_, { config }) => config,
  (listings, config) => {
    return listings.map(
      mapFetchedDataToView(config)
    );
  }
);
