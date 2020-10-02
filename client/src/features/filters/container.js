import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  updateCalories,
  updateCuisines,
  updateIngredients,
  updateTime
} from "./actions";
import { FiltersView } from "./component";
import {
  selectCalories,
  selectCuisines,
  selectIngredients,
  selectTime
} from "./selectors";

const mapStateToProps = createStructuredSelector({
  ingredients: selectIngredients,
  cuisines: selectCuisines,
  calories: selectCalories,
  time: selectTime
});

const mapDispatchToProps = {
  updateIngredients,
  updateCuisines,
  updateCalories,
  updateTime
}

export const Filters = connect(mapStateToProps, mapDispatchToProps)(FiltersView);