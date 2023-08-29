import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Mbombela",
    temperature: 27,
    date: "Sunday 13:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    feelsLike: 27,
    humidity: 5,
    wind: 3,
  };
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Type a city..."
              className="form-control shadow-sm"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control shadow-sm submit"
            />
          </div>
        </div>
      </form>
      <div className="col-12">
        <div className="card-body">
          <h1>Mbombela</h1>
          <h2>{weatherData.date}</h2>
          <h3>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span>°C</span>
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="card-body">{weatherData.description}</div>
        </div>

        <div className="col-4">
          <div className="card-body">
            Humidity <span>{weatherData.humidity}</span>%
          </div>
        </div>

        <div className="col-4">
          <div className="card-body">
            Wind <span>{weatherData.wind}</span>Km/h
          </div>
        </div>
      </div>
    </div>
  );
}
