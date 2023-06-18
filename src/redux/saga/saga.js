import { all } from "redux-saga/effects";

import getAllData from "./upcomingMoviesSaga";
export default function* rootSaga() {
  yield all([getAllData()]);
}
