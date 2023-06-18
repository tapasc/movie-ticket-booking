import "./movieBookingCard.css";
import { Link } from "react-router-dom";
export default function MovieBookingCard({ _id, name, imageUrl, movieType }) {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img src={imageUrl} alt="movie" style={{ aspectRatio: "24/36" }} />
      </div>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>{name}</p>

      <Link to={`/movie-details/${_id}`} className="button">
        <button>Book</button>
      </Link>
    </div>
  );
}
