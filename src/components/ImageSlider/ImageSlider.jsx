import { useState, useEffect } from "react";
export default function ImageSlider({ latest, liveShows, upcoming }) {
  const [allMoviesAndEvents, setAllMoviesAndEvents] = useState([]);

  useEffect(
    (state) => {
      if (latest?.length > 0 && upcoming?.length > 0 && liveShows?.length > 0) {
        setAllMoviesAndEvents([...latest, ...upcoming, ...liveShows]);
      }
    },
    [latest, liveShows, upcoming]
  );
  return (
    <div className="sliderContainer" style={{ width: "100%" }}>
      <section className="slider" style={{ width: "calc(100% - 20px)" }}>
        <div
          className="imageContainer"
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {allMoviesAndEvents.map((items) => {
            console.log(items.imageUrl);
            return (
              <div
                className="image"
                style={{ width: "150px", height: "100px", margin: "10px" }}
              >
                <img
                  width="100%"
                  height="auto"
                  src={items.imageUrl}
                  alt="movieiMage"
                  objecFit="cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
