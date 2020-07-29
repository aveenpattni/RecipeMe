import { all, fork } from "redux-saga/effects";
import { watchSearch } from "../features/search/sagas";

export default function* rootSaga() {
  yield all([
    fork(watchSearch)
  ]);
}