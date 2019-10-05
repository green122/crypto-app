import { createSelector } from 'reselect';

export const getAllListings = createSelector(state => state.listings, listings => listings.entries);
export const getListings = createSelector(getAllListings, state => state.filters.page, (listings, page) => {
    return listings.slice(page * 10, (page +1 ) * 10) || [];
});