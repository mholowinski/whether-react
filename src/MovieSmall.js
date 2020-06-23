import React from "react";
export default function MovieSmall({ poster, onClick, id, alt }) {
  return (
    <img
      id={id}
      onClick={onClick}
      className="movie-small"
      src={poster}
      alt={alt}
    />
  );
}
