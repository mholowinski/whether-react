import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Movie from "./Movie/Movie.js";
import MovieSmall from "./Movie/MovieSmall.js";
import Home from "./Home";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";

const App = () => {
  const MOVIE_KEY = "313e16483cee54d5e7f963a577d821f0";

  const [state, setState] = useState({
    movies: [],
    movieIndexFirst: 0,
    movieIndexLast: 0,
  });
  const [first, setFirst] = useState([]);
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      MOVIE_KEY +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"
  );
  callback;
  useEffect(() => {
    axios.get(url).then(function (data) {
      const result = data.data.results;
      setFirst(result[0]);
      setState(() => {
        return { movies: result, movieIndexFirst: 0, movieIndexLast: 3 };
      });
    });
  }, [url]);

  const callback = (mood) => {
    // set mood
    switch (mood) {
      case 1:
        {
          setUrl(
            "https://api.themoviedb.org/3/discover/movie?api_key=" +
              MOVIE_KEY +
              "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"
          );
        }
        break;
      case 2: {
        setUrl(
          "https://api.themoviedb.org/3/discover/movie?api_key=" +
            MOVIE_KEY +
            "&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=53"
        );

        console.log(url);
        break;
      }
    }
  };

  return (
    <Router>
      <div id="container">
        <Navbar />

        <Route path="/" exact>
          <Home parentCallback={callback} />
          <h2></h2>
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/result">
          <div id="movie-list">
            <button onClick={() => scroll(-4)}>SCROLL UP</button>
            {state.movies
              .slice(state.movieIndexFirst, state.movieIndexLast)
              .map((index, counter) => (
                <MovieSmall
                  key={index.id}
                  poster={
                    "https://image.tmdb.org/t/p/original" + index.poster_path
                  }
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
        </Route>
      </div>
    </Router>
  );

  function selectMovie(index) {
    setFirst(state.movies[index]);
  }

  function scroll(where) {
    // 4 = up / -4= down
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
    // console.log(state.movieIndexFirst + " " + state.movieIndexLast);
  }
};

render(<App />, document.getElementById("root"));
