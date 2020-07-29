import { createSelector } from "reselect";

export const searchDomain = state => state.search

export const selectResults = createSelector(
  searchDomain,
  results => results
)