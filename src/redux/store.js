import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import rootSaga from "./saga/saga";
import movieReducer from "./features/movies/movieSlice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga);
