import React from "react";
export default function Movie({
  poster,
  title,
  year,
  tagline,
  overview,
  vote_average,
}) {
  function dupa() {
    console.log("xd");
  }

  return (
    <div id="movie">
      <img className="movie-poster" src={poster} alt="Poster" />
      <div className="movie-container">
        <span className="movie-title">{title}</span>
        <span className="movie-year"> {year}</span>
        <p className="movie-tagline">{tagline}</p>
        <p className="movie-description">{overview}</p>
      </div>
      <span className="movie-rating">{vote_average}</span>
      <div className="movie-details">
        <p id="movie-menu">
          <span
            className="movie-menu-element"
            role="button"
            tabIndex="0"
            onClick={dupa}
          >
            CAST
          </span>
          <span className="movie-menu-element">DETAILS</span>
          <span className="movie-menu-element">WHY THIS MOVIE ?</span>
        </p>
        <span className="movie-cast">
          Ryan Goslin, Michelle Williams, Jack Faggot
        </span>
      </div>
    </div>
  );
}
