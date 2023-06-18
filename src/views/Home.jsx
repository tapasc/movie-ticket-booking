import "./home.css";
import { useSelector } from "react-redux";
import MovieBookingCard from "../components/MovieCard/MovieBookingCard";
import { useEffect, useState } from "react";
export default function Home({ latest, liveShows, upcoming }) {
  const [allMoviesAndEvents, setAllMoviesAndEvents] = useState([]);

  const isLoadedSelector = useSelector((state) => {
    return state.movies.isLoaded;
  });

  useEffect(
    (state) => {
      if (latest?.length > 0 && upcoming?.length > 0 && liveShows?.length > 0) {
        setAllMoviesAndEvents([...latest, ...upcoming, ...liveShows]);
      }
    },
    [latest, liveShows, upcoming]
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
            return <MovieBookingCard {...props} key={props._id} />;
          })}
        </div>
      )}
    </div>
  );
}
