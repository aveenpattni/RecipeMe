import { combineReducers } from "redux"

const theDefaultReducer = (state = 0, action) => state

const rootReducer = combineReducers({theDefaultReducer})

export default rootReducer