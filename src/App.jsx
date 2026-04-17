import "./App.css";
import { useEffect, useState } from "react";
import Search from "./components/search";
import WeatherCard from "./components/WeatherCard";
import SixDayForecast from "./components/SixDayForecast";
import {
  getCurrentWeather,
  getFiveDayForecast,
  getHighsAndLows,
} from "./services/Services";

function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "";
  });
  const [weatherData, setWeatherData] = useState({});
  const weatherApiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
  const [dailyForecast, setDailyForecast] = useState({});
  const [error, setError] = useState("");

  function inputChange(formData) {
    let newCity = formData.get("city");
    setCity(newCity);
    localStorage.setItem("city", newCity);
  }

  useEffect(() => {
    if (city !== "") {
      setWeatherData({})
      setDailyForecast({})
      setError("");

      // current weather
      getCurrentWeather(weatherApiKey, city)
        .then((data) => {
          setWeatherData(data);
        })
        .catch((error) => setError("Please choose a valid city"));

      // 5 day forecast
      getFiveDayForecast(weatherApiKey, city)
        .then((data) => {
          setDailyForecast(getHighsAndLows(data));
        })
        .catch((error) => setError("Please choose a valid city"));
    }
  }, [city]);

  return (
    <>
      <Search 
        inputChange={inputChange} 
        error={error}
      />
      {error.length === 0 && 
      <>
        {weatherData.main && (
          <WeatherCard weatherData={weatherData} />
        )}
        {Object.keys(dailyForecast).length > 0 && (
          <>
            <h1 className="text-center my-1 text-[#3B82F6] md:text-xl lg:text-2xl">
              6 Day Forecast
            </h1>
            <SixDayForecast dailyForecast={dailyForecast} />
          </>
        )}
      </>}
    </>
  );
}

export default App;
