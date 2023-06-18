import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getDataSuccess } from "../features/movies/movieSlice";
function* workFetchAllData(payload) {
  const upComingMovies = yield call(() =>
    axios.get("http://3.17.216.66:4000/upcomingMovies")
  );
  const latestMovies = yield call(() =>
    axios.get("http://3.17.216.66:4000/latest")
  );
  const liveShows = yield call(() =>
    axios.get("http://3.17.216.66:4000/events")
  );
  const upcomingMoviesResult = yield upComingMovies.data;
  const latestMoviesResult = yield latestMovies.data;
  const liveShowResult = yield liveShows.data;

  yield put(
    getDataSuccess({ upcomingMoviesResult, latestMoviesResult, liveShowResult })
  );
}
function* getAllData() {
  yield takeEvery("movies/getData", workFetchAllData);
}

export default getAllData;
