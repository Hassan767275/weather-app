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
import { RotatingLines } from "react-loader-spinner";

function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "";
  });
  const [weatherData, setWeatherData] = useState({});
  const weatherApiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
  const [dailyForecast, setDailyForecast] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function inputChange(formData) {
    let newCity = formData.get("city");
    setCity(newCity);
    localStorage.setItem("city", newCity);
  }

  async function getWeatherData() {
    try {
      // current weather
      const currentWeather = await getCurrentWeather(weatherApiKey, city);
      setWeatherData(currentWeather);

      // 5 day forecast
      const sixDayForecast = await getFiveDayForecast(weatherApiKey, city);
      setDailyForecast(getHighsAndLows(sixDayForecast));
    } catch (err) {
      setError("Please choose a correct city");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (city !== "") {
      setWeatherData({});
      setDailyForecast({});
      setError("");

      setIsLoading(true);
      getWeatherData();
    }
  }, [city]);

  return (
    <>
      <Search inputChange={inputChange} error={error} />
      {isLoading && (
        <div className="flex justify-center">
          <RotatingLines
          strokeColor="#3B82F6"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
        </div>
      )}
      {error.length === 0 && (
        <>
          {weatherData.main && <WeatherCard weatherData={weatherData} />}
          {Object.keys(dailyForecast).length > 0 && (
            <>
              <h1 className="text-center my-1 text-[#3B82F6] md:text-xl lg:text-2xl">
                6 Day Forecast
              </h1>
              <SixDayForecast dailyForecast={dailyForecast} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
