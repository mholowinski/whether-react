import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import recommend from "./algo";

export default function Home({ parentCallback }) {
  const WEATHER_KEY = "a1c846e036fcd5fdcd38581b45498a49";
  const MOVIE_KEY = "313e16483cee54d5e7f963a577d821f0";

  const [movieUrl, setMovieUrl] = useState(
    "https://api.themoviedb.org/3/discover/movie?api_key=" +
      MOVIE_KEY +
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53"
  );

  const [weatherState, setWeatherState] = useState({
    weatherData: [],
    weatherDataMain: [],
    weatherDataTemp: [],
    weatherDataSys: [],
  });

  const [weatherUrl, setWeatherUrl] = useState(
    "https://api.openweathermap.org/data/2.5/weather?lat=40&lon=56&appid=" +
      WEATHER_KEY
  );

  function success(pos) {
    let crd = pos.coords;

    setWeatherUrl(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        Math.floor(crd.latitude) +
        "&lon=" +
        Math.floor(crd.longitude) +
        "&appid=" +
        WEATHER_KEY
    );
  }

  function createMovieUrl(selectedMood) {
    setMovieUrl(
      recommend(
        MOVIE_KEY,
        weatherState.weatherData.dt,
        weatherState.weatherDataTemp.temp - 273,
        weatherState.weatherDataMain.id,
        weatherState.weatherDataSys.sunrise,
        weatherState.weatherDataSys.sunset,
        selectedMood
      )
    );
  }

  useEffect(() => {
    parentCallback(movieUrl);
  }, [movieUrl]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    axios.get(weatherUrl).then(function (data) {
      const weatherResult = data.data;

      setWeatherState(() => {
        return {
          weatherData: weatherResult,
          weatherDataMain: weatherResult.weather[0],
          weatherDataTemp: weatherResult.main,
          weatherDataSys: weatherResult.sys,
        };
      });
    });
  }, [weatherUrl]);

  return (
    <div>
      <h2>Weather in {weatherState.weatherData.name} </h2>
      <p> Type: {weatherState.weatherDataMain.main}</p>
      <p>
        Temperature:{" "}
        {Math.floor(weatherState.weatherDataTemp.temp - 273) + " °C"}
      </p>

      <h1>Pick somethin!</h1>
      <button
        onClick={() => {
          createMovieUrl(1);
        }}
      >
        Good
      </button>

      <button
        onClick={() => {
          createMovieUrl(2);
        }}
      >
        Mad
      </button>

      <button
        onClick={() => {
          createMovieUrl(3);
        }}
      >
        Sad
      </button>

      <button
        onClick={() => {
          createMovieUrl(4);
        }}
      >
        Happy
      </button>

      <button
        onClick={() => {
          createMovieUrl(5);
        }}
      >
        Frisky
      </button>
    </div>
  );
}
