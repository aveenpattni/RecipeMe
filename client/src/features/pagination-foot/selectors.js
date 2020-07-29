import { createSelector } from "reselect";
import { searchDomain } from "../../templates/results/selectors";

export const selectSearchParams = createSelector(
  searchDomain,
  search => search.params
)