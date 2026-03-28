import './App.css'
import { useEffect, useState } from 'react'
import Search from "./components/search"
import WeatherCard from './components/WeatherCard'

function App() {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState({})
  const weatherApiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY

  function inputChange(formData) {
      let newCity = formData.get("city")
      setCity(newCity)
  }

  useEffect(() => {
      if (city !== "") {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
              .then(res => res.json())
              .then(data => setWeatherData(data))
      }
  }, [city])

  return (
    <>
      <Search 
        inputChange={inputChange} 
        weatherData={weatherData}
      />
      {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData}/>}
    </>
  )
}

export default App
