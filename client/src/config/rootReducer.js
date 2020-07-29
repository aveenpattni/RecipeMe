import { combineReducers } from "redux"
import { searchBarReducer } from "../components/seach-bar/reducer";
import { searchReducer } from "../features/search/reducer";

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  search: searchReducer
})

export default rootReducer