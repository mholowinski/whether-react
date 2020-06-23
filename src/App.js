import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Movie from "./Movie.js";
import MovieSmall from "./MovieSmall.js";
import axios from "axios";

const App = () => {
  const API_KEY = "313e16483cee54d5e7f963a577d821f0";
  const URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
    API_KEY +
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  const [state, setState] = useState({
    movies: [],
    movieIndexFirst: 0,
    movieIndexLast: 0,
  });
  const [first, setFirst] = useState([]);

  useEffect(() => {
    axios.get(URL).then(function (data) {
      const result = data.data.results;
      setFirst(result[0]);
      setState(() => {
        return { movies: result, movieIndexFirst: 0, movieIndexLast: 3 };
      });
    });
  }, []);

  function selectMovie(index) {
    setFirst(state.movies[index]);
  }

  function scroll(where) {
    // 4 = up / -4= down
    console.log("Scrolling...");
    setState((prevState) => {
      if (
        (prevState.movieIndexFirst === 0 && where === -4) ||
        (prevState.movieIndexFirst === 16 && where === 4)
      ) {
        return {
          ...prevState,
          movieIndexFirst: prevState.movieIndexFirst,
          movieIndexLast: prevState.movieIndexLast,
        }; // mozna tez wylaczyc przycisk xd
      } else {
        return {
          ...prevState,
          movieIndexFirst: prevState.movieIndexFirst + where,
          movieIndexLast: prevState.movieIndexLast + where,
        };
      }
    });
    console.log(state.movieIndexFirst + " " + state.movieIndexLast);
  }

  return (
    <div id="container">
      <Navbar />

      <div id="movie-list">
        <button onClick={() => scroll(-4)}>SCROLL UP</button>
        {state.movies
          .slice(state.movieIndexFirst, state.movieIndexLast)
          .map((index, counter) => (
            <MovieSmall
              key={index.id}
              poster={"https://image.tmdb.org/t/p/original" + index.poster_path}
              onClick={() => selectMovie(counter + state.movieIndexFirst)}
              id={counter + state.movieIndexFirst}
              alt={index.original_title}
            />
          ))}
        <button onClick={() => scroll(4)}>SCROLL DOWN</button>
      </div>

      <Movie
        poster={"https://image.tmdb.org/t/p/original" + first.poster_path}
        title={first.original_title}
        year={first.release_date}
        overview={first.overview}
        vote_average={first.vote_average}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
