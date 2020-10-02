import { combineReducers } from "redux"
import { searchBarReducer } from "../components/seach-bar/reducer";
import { searchReducer } from "../features/search/reducer";
import { filtersReducer } from "../features/filters/reducer";

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  search: searchReducer,
  filters: filtersReducer
})

export default rootReducer