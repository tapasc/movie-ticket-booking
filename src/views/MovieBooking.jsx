import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function MovieBooking({ latest, liveShows, upcoming }) {
  const [isBooked, setIsBooked] = useState(false);

  const { BookingId } = useParams();

  const movieBookingDate = useRef();
  const movieShowTime = useRef();
  const totalSeatsBooked = useRef();
  const [allMoviesAndEvents, setAllMoviesAndEvents] = useState([]);
  const [movieObjectContainer, setMovieObjectContainer] = useState({});
  useEffect(
    (state) => {
      if (latest?.length > 0 && upcoming?.length > 0 && liveShows?.length > 0) {
        setAllMoviesAndEvents([...latest, ...upcoming, ...liveShows]);
      }
    },
    [latest, liveShows, upcoming]
  );
  // const [{ name }] = allMoviesAndEvents.filter(
  //   (item) => item._id === BookingId
  // );
  useEffect(() => {
    if (allMoviesAndEvents?.length > 0) {
      setMovieObjectContainer(() => {
        return allMoviesAndEvents.filter((item) => item._id === BookingId);
      });
    }
  }, [allMoviesAndEvents]);
  function ValidateData() {
    if (movieBookingDate.current.value) {
      movieBookingDate.current.style.border = "none";
      return true;
    } else {
      movieBookingDate.current.style.border = "2px solid red";
      return false;
    }
  }
  return (
    <div>
      <div style={{ textAlign: "center", margin: "60px 0" }}>
        <div style={{ marginBottom: "20px" }}>
          <h1>Booking page</h1>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 300px",
            gap: "15px",
            width: "360px",
            margin: "20px auto",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <p>Movie name:</p>
            <p>Date:</p>
            <p>Avaible Show Timings:</p>
            <p>Number of seats:</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "170px",
            }}
          >
            <p>{movieObjectContainer[0].name}</p>
            <input type="date" name="dateInput" id="" ref={movieBookingDate} />
            <select
              name="movieTimeSlot"
              id=""
              style={{ width: "130px" }}
              ref={movieShowTime}
            >
              <option value="morning">Morning Show</option>
              <option value="afternoon">Afternoon Show</option>
              <option value="night">Night Show</option>
            </select>
            <select
              name="seatsBooked"
              id=""
              style={{ width: "130px" }}
              ref={totalSeatsBooked}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        {/* <Link className="button"> */}
        <button
          // disabled={onBookingData() ? false : true}
          className="button"
          onClick={() => {
            if (ValidateData()) {
              setIsBooked(true);
            }
          }}
        >
          Book Ticket
        </button>
        {/* </Link> */}
      </div>
      {isBooked && (
        <div
          onClick={() => {
            setIsBooked(false);
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            top: "0",
            left: "0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "500px",
              transform: "translate(-50%,-50%)",
              height: "340px",
              backgroundColor: "lemonchiffon",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <p>Ticket Details:</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                margin: "30px",
              }}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "10px",
                  justifyContent: "center",
                }}
              >
                <p>{movieObjectContainer[0].name}</p>
                <p>Date:</p>
                <p>Time slot:</p>
                <p>Number of tickets</p>
              </div>
            </div>
            <button className="button">Make Payment</button>
          </div>
        </div>
      )}
    </div>
  );
}
