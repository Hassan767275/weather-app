import './App.css'
import { useEffect, useState } from 'react'
import Search from "./components/search"
import WeatherCard from './components/WeatherCard'
import FiveDayForcast from './components/FiveDayForecast'
import { getCurrentWeather, getFiveDayForecast} from "./services/Services"

function App() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState({})
  const weatherApiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
  const [fiveDayForecast, setFiveDayForecast] = useState({})

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
        setFiveDayForecast(weatherApiKey, city)
          .then(data => setFiveDayForecast(data))
      }
  }, [city])

  return (
    <>
      <Search 
        inputChange={inputChange} 
        weatherData={weatherData}
      />
      {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData}/>}
      {Object.keys(fiveDayForecast).length > 0 && <FiveDayForcast forecast={fiveDayForecast}/>}
    </>
  )
}

export default App
