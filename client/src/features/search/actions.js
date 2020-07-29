export const SEARCH_RECIPE = {
  LOADING: "SEARCH_RECIPE.LOADING",
  SUCCESS: "SEARCH_RECIPE.SUCCESS",
  FAILURE: "SEARCH_RECIPE.FAILURE"
};
export const PAGE = {
  UPDATE: "PAGE.UPDATE"
};

export const searchRecipe = (searchParams) => ({
  type: SEARCH_RECIPE.LOADING,
  searchParams
});
export const searchRecipeSuccess = (searchResponse) => ({
  type: SEARCH_RECIPE.SUCCESS,
  searchResponse
});
export const searchRecipeFailure = () => ({
  type: SEARCH_RECIPE.FAILURE
});

export const updatePageAction = (pageParams) => ({
  type: PAGE.UPDATE,
  pageParams
});