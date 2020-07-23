export const SEARCH_BAR = {
  UPDATE: "SEARCH_BAR.UPDATE"
}

export const updateSearchBar = input => ({
  type: SEARCH_BAR.UPDATE,
  input
});