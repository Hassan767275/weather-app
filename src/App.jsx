import './App.css'
import { useEffect, useState } from 'react'
import Search from "./components/search"
import WeatherCard from './components/WeatherCard'
import SixDayForecast from './components/SixDayForecast'
import { getCurrentWeather, getFiveDayForecast, getHighsAndLows} from "./services/Services"

function App() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState({})
  const weatherApiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
  const [dailyForecast, setDailyForecast] = useState({})

  function inputChange(formData) {
      let newCity = formData.get("city")
      setCity(newCity)
  }

  useEffect(() => {
      if (city !== "") {
        // current weather
        getCurrentWeather(weatherApiKey, city)
          .then(data => setWeatherData(data))
          
        // 5 day forecast
        getFiveDayForecast(weatherApiKey, city)
          .then(data => {
            setDailyForecast(getHighsAndLows(data))
          })
      }
  }, [city])
  
  return (
    <>
      <Search 
        inputChange={inputChange} 
        weatherData={weatherData}
      />
      {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData}/>}
      {Object.keys(dailyForecast).length > 0 && (
        <>
          <h1 className="text-center mt-2 text-[#3B82F6] md:text-xl lg:text-2xl">6 Day Forecast</h1>
          <SixDayForecast dailyForecast={dailyForecast}/>
        </>
      )}
    </>
  )
}

export default App
