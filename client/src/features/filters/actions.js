export const UPDATE_FILTERS = {
  INGREDIENTS: "UPDATE_FILTERS.INGREDIENTS",
  CUISINE: "UPDATE_FILTERS.CUISINE",
  CALORIES_MAX: "UPDATE_FILTERS.CALORIES_MAX",
  CALORIES_MIN: "UPDATE_FILTERS.CALORIES_MIN",
  TIME: "UPDATE_FILTERS.TIME"
};

export const updateIngredients = (ingr) => ({
  type: UPDATE_FILTERS.INGREDIENTS,
  ingr
});

export const updateCuisines = (cuisine) => ({
  type: UPDATE_FILTERS.CUISINE,
  cuisine
});

export const updateCalories = (calories) => ({
  type: UPDATE_FILTERS.CALORIES_MAX,
  calories
});

export const updateTime = (time) => ({
  type: UPDATE_FILTERS.TIME,
  time
});