import { UPDATE_FILTERS } from "./actions";
import { createReducer } from "../../utils/create-reducer";
import { append, reject } from "ramda"

const initialFiltersState = {
  ingredients: "10+",
  cuisines: [],
  calories: "",
  time: null
};

const updateIngredients = (state, {ingr}) => ({
  ...state,
  ingredients: ingr
});

const updateCuisines = (state, {cuisine}) => ({
  ...state,
  cuisines:
    (state.cuisines.includes(cuisine) ?
      reject(i => i === cuisine, state.cuisines) :
      append(cuisine, state.cuisines))
});

const updateCalories = (state, {calories}) => ({
  ...state,
  calories:
    (state.calories.includes(calories) ?
      reject(i => i === calories, state.calories) :
      append(calories, state.calories))
});

const updateTime = (state, {time}) => ({
  ...state,
  time
});

const handlers = {
  [UPDATE_FILTERS.INGREDIENTS]: updateIngredients,
  [UPDATE_FILTERS.CUISINE]: updateCuisines,
  [UPDATE_FILTERS.CALORIES]: updateCalories,
  [UPDATE_FILTERS.TIME]: updateTime
}

export const filtersReducer = createReducer(initialFiltersState, handlers);
