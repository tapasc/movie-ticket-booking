import "./home.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MovieBookingCard from "../components/MovieCard/MovieBookingCard";
export default function UpcomingMovies({ upcoming }) {
  const isLoadedSelector = useSelector((state) => {
    return state.movies.isLoaded;
  });
  const [allMoviesAndEvents, setAllMoviesAndEvents] = useState([]);

  useEffect(
    (state) => {
      if (upcoming?.length > 0) {
        setAllMoviesAndEvents([...upcoming]);
      }
    },
    [upcoming]
  );
  return (
    <div>
      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <h1>Unlimited movies, live shows and more.</h1>
        <p>Recommended Movies</p>
      </div>
      {isLoadedSelector && allMoviesAndEvents.length > 0 && (
        <div className="gridContainer">
          {allMoviesAndEvents.map((props) => {
            return (
              <MovieBookingCard
                {...props}
                key={props._id}
                movieType="upcoming"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
