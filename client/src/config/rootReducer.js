import { combineReducers } from "redux"
import { searchBarReducer } from "../components/seach-bar/reducer";

const rootReducer = combineReducers({
  searchBar: searchBarReducer
})

export default rootReducer