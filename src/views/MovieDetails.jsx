import "./home.css";
import { useSelector } from "react-redux";
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails({ latest, upcoming, liveShows }) {
  const isLoadedSelector = useSelector((state) => {
    return state.movies.isLoaded;
  });
  const [allMoviesAndEvents, setAllMoviesAndEvents] = useState([]);

  useEffect(
    (state) => {
      if (latest?.length > 0 && upcoming?.length > 0 && liveShows?.length > 0) {
        setAllMoviesAndEvents([...latest]);
      }
    },
    [latest, upcoming, liveShows]
  );
  const { MovieID } = useParams();
  const [movieObjectContainer, setMovieObjectContainer] = useState({});

  useEffect(() => {
    if (allMoviesAndEvents?.length > 0) {
      setMovieObjectContainer(() => {
        return allMoviesAndEvents.filter((item) => item._id === MovieID);
      });
    }
  }, [allMoviesAndEvents]);

  return (
    <div>
      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <h1>Unlimited movies, live shows and more.</h1>
        {/* <p>Recommended Movies</p> */}
      </div>
      {isLoadedSelector && allMoviesAndEvents.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ maxWidth: "200px" }}>
              <img src={movieObjectContainer[0].imageUrl} alt="" />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <span style={{ fontWeight: 700 }}>Movie Name:</span>{" "}
                <span style={{ fontWeight: 400 }}>
                  {movieObjectContainer[0].name}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Language:</span>{" "}
                <span style={{ fontWeight: 400 }}>
                  {movieObjectContainer[0].language}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Rating:</span>{" "}
                <span style={{ fontWeight: 400 }}>
                  {movieObjectContainer[0].rate}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Film Genre:</span>{" "}
                <span style={{ fontWeight: 400 }}>
                  {movieObjectContainer[0].type}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: 700 }}>Duration:</span>{" "}
                <span style={{ fontWeight: 400 }}>2.5 Hours</span>
              </div>
              <Link className="button" to={`/movie-booking/${MovieID}`}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
      <Outlet></Outlet>
    </div>
  );
}
