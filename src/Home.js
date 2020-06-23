import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home({ parentCallback }) {
  const [mood, setMood] = useState(0);
  const [weatherState, setWeatherState] = useState([]);
  const WEATHER_KEY = "a1c846e036fcd5fdcd38581b45498a49";
  let weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=51&lon=22&appid=" +
    WEATHER_KEY;

  useEffect(() => {
    axios.get(weatherUrl).then(function (data) {
      const weatherResult = data.data;
      setWeatherState(weatherResult);
      console.log(weatherResult.weather[0].main);
      console.log(weatherState.weather[0].main);
    });
  }, []);

  return (
    <div>
      <h1>Pick somethin!</h1>
      <Link
        to="/result"
        onClick={() => {
          setMood(1);
          parentCallback(1);
        }}
      >
        <button>USE TYPE 1</button>
      </Link>
      <Link
        to="/result"
        onClick={() => {
          setMood(2);
          parentCallback(2);
        }}
      >
        <button>USE TYPE 2</button>
      </Link>
      <button
        onClick={() => {
          setMood(3);
          parentCallback(3);
        }}
      >
        URL TYPE 3
      </button>
      <button
        onClick={() => {
          setMood(4);
          parentCallback(4);
        }}
      >
        URL TYPE 4
      </button>

      <h2>Weather in {weatherState.name} </h2>
      <p></p>
    </div>
  );
}
