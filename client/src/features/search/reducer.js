import { SEARCH_RECIPE, PAGE } from "./actions";
import { createReducer } from "../../utils/create-reducer";

const initialSearchState = {
  params: {
    searchFrom: 0,
    searchTo: 10,
    displayCount: 10
  }
}

const searchSuccess = (state, { searchResponse }) => ({
  ...state,
  ...searchResponse
});

const updatePage = (state, {pageParams}) => ({
  ...state,
  params: {
    ...state.params,
    ...pageParams
  }
})

const handlers = {
  [SEARCH_RECIPE.SUCCESS]: searchSuccess,
  [PAGE.UPDATE]: updatePage
}

export const searchReducer = createReducer(initialSearchState, handlers);