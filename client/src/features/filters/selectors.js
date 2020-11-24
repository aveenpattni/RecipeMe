import { createSelector } from "reselect";

export const filtersDomain = state => state.filters

export const selectIngredients = createSelector(
  filtersDomain,
  filters => filters.ingredients
);

export const selectCuisines = createSelector(
  filtersDomain,
  filters => filters.cuisines
);

export const selectCalories = createSelector(
  filtersDomain,
  filters => filters.calories
);

export const selectTime = createSelector(
  filtersDomain,
  filters => filters.time
);
