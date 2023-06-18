import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  latestLiveShows: [],
};
export const liveShows = createSlice({
  name: "liveShows",
  initialStore,
  reducers: {
    getAllLiveShows: (state, action) => {},
    getAllLiveShowsSuccess: (state, action) => {},
    getAllLiveShowsFailure: (state, action) => {},
  },
});
export const {
  getAllLiveShows,
  getAllLiveShowsSuccess,
  getAllLiveShowsFailure,
} = liveShows.actions;

export default liveShows.reducer;
