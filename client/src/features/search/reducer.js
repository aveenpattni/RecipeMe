import { SEARCH_RECIPE } from "./actions";
import { createReducer } from "../../utils/create-reducer";

const initialSearchState = {}

const searchSuccess = (state, searchResponse) => ({
  ...state,
  searchResponse: searchResponse
});

const handlers = {
  [SEARCH_RECIPE.SUCCESS]: searchSuccess
}

export const searchReducer = createReducer(initialSearchState, handlers);