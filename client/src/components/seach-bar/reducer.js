import { SEARCH_BAR } from "./actions";
import { createReducer } from "../../utils/create-reducer";

const initialState = {
  input: ""
}

const searchBarUpdate = (state, {input}) => ({
  ...state,
  input: input
});

const handlers = {
  [SEARCH_BAR.UPDATE]: searchBarUpdate
}

export const searchBarReducer = createReducer(initialState, handlers);