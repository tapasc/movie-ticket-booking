import "./navComponent.css";
import { NavLink } from "react-router-dom";
export default function NavComponent() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/latest-movies" className="button">
          Latest Movies
        </NavLink>
        <NavLink to="/upcoming-movies" className="button">
          Upcoming Movies
        </NavLink>
        <NavLink to="/nearby-events" className="button">
          Nearby Events
        </NavLink>
      </nav>
    </div>
  );
}
