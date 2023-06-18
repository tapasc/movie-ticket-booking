import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoaded: false,
  latestMovies: [],
  upcomingMovies: [],
  liveShows: [],
};
export const movieReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getData: () => {},
    getDataSuccess: (state, action) => {
      const { latestMoviesResult, liveShowResult, upcomingMoviesResult } =
        action.payload;
      state.latestMovies = [...latestMoviesResult];
      state.liveShows = [...liveShowResult];
      state.upcomingMovies = [...upcomingMoviesResult];
      state.isLoaded = true;
    },
    getDataFailure: () => {},
  },
});
export const { getData, getDataSuccess, getDataFailure } = movieReducer.actions;

export default movieReducer.reducer;
