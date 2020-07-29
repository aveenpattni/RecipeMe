import { call, put, all, takeLatest } from 'redux-saga/effects'
import { searchRequest } from "./api";
import { searchRecipeSuccess, searchRecipeFailure, SEARCH_RECIPE } from "./actions";

export function* search({searchParams}) {
  try {
    const searchResponse = yield call(searchRequest, {q: searchParams.q});
    console.log("🔥", searchResponse);
    yield put(searchRecipeSuccess(searchResponse));
  }
  catch {
    yield put(searchRecipeFailure());
  }
};

export function* watchSearch() {
  yield all([
    takeLatest(SEARCH_RECIPE.LOADING, search)
  ])
}