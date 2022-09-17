import { useState, useEffect } from "react";
import './App.css';

import WeatherPrimary from "../WeatherPrimary/WeatherPrimary";
import WeatherSecondary from "../WeatherSecondary/WeatherSecondary"

function App() {
  const [weather, setWeather] = useState(null);
  const [locations, setLocations] = useState("Dublin");
  const [cityName, setCityName] = useState("Dublin");

  const apiKey = "API_KEY";

  async function getCoordinates() {
    try {
      const urlToFetch = `http://api.openweathermap.org/geo/1.0/direct?q=${locations}&appid=${apiKey}`;
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const cityName = jsonResponse[0].name;
        const lat = jsonResponse[0].lat;
        const lon = jsonResponse[0].lon;
        return {cityName, lat, lon};
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getWeather() {
    const {cityName, lat, lon} = await getCoordinates();
    try {
      const urlToFetch = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        setWeather(jsonResponse);
        setCityName(cityName);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      getWeather();
    }
    return;
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={locations}
          onChange={(e) => setLocations(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Enter location..."
          className="location_input"
        />
      </div>
      {weather && (<WeatherPrimary weather={weather} cityName={cityName} />)}
      {weather && (<WeatherSecondary weather={weather} />)}
    </div>
  )
}

export default App;
