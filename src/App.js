import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import NavComponent from "./components/NavComponent/NavComponent";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import LatestMovies from "./views/LatestMovies";
import UpcomingMovies from "./views/UpcomingMovies";
import NearbyEvents from "./views/NearbyEvents";
import ErrorPage from "./views/ErrorPage";
import MovieDetails from "./views/MovieDetails";
import MovieBooking from "./views/MovieBooking";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/features/movies/movieSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const data = useSelector((state) => state.movies);
  const [globalState, setGlobalState] = useState({});

  useEffect(() => {
    let media = {
      latest: data.latestMovies,
      upcoming: data.upcomingMovies,
      liveShows: data.liveShows,
    };
    setGlobalState(media);
  }, [data]);
  const findMovieDetails = () => {};
  return (
    <div className="App">
      <HeaderComponent />
      <ImageSlider
        latest={globalState.latest}
        liveShows={globalState.liveShows}
        upcoming={globalState.upcoming}
      />
      <NavComponent />
      <main className="mainContentArea">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                latest={globalState.latest}
                liveShows={globalState.liveShows}
                upcoming={globalState.upcoming}
              />
            }
          ></Route>
          <Route
            path="/latest-movies"
            element={<LatestMovies latest={globalState.latest} />}
          ></Route>
          <Route
            path="/upcoming-movies"
            element={<UpcomingMovies upcoming={globalState.upcoming} />}
          ></Route>
          <Route
            path="/nearby-events"
            element={<NearbyEvents liveShows={globalState.liveShows} />}
          ></Route>
          <Route
            path="/movie-details/:MovieID"
            element={
              <MovieDetails
                handleFindDetails={findMovieDetails}
                latest={globalState.latest}
                upcoming={globalState.upcoming}
                liveShows={globalState.liveShows}
              />
            }
          ></Route>
          <Route
            path="/movie-booking/:BookingId"
            element={
              <MovieBooking
                latest={globalState.latest}
                upcoming={globalState.upcoming}
                liveShows={globalState.liveShows}
              />
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
