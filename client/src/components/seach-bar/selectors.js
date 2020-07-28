import { createSelector } from "reselect";

const searchBarDomain = state => state.searchBar

export const selectSearch = createSelector(
  searchBarDomain,
  searchBar => searchBar.input
)