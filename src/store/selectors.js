import { createSelector } from "reselect";
import { mapFetchedDataToView } from "../utils/mapping";

export const getListingsMaximum = state => state.filters.maximum;

export const getAllListings = createSelector(
  state => state.listings,
  listings => listings.entries
);

export const getListings = createSelector(
  getAllListings,
  state => state.filters.page,
  (listings, page) => {
    return listings.slice(page * 10, (page + 1) * 10) || [];
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
