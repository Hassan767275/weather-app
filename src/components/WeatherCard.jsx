import "./WeatherCard.css"
import clearSky from "../assets/sun.png"
import cloudyImage from "../assets/cloudy.png"
import dustImage from "../assets/dust.png"
import fogImage from "../assets/fog.png"
import hazeImage from "../assets/haze.png"
import rainImage from "../assets/heavy-rain.png"
import mistImage from "../assets/mist.png"
import sandImage from "../assets/sand.png"
import snowImage from "../assets/snow.png"
import ashImage from "../assets/ash.jpeg"
import tornadoImage from "../assets/tornado.jpg"
import drizzleImage from "../assets/cloudy (1).png"
import smokeImage from "../assets/severe-weather.png"
import squallImage from "../assets/weather.png"
import thunderstormImage from "../assets/thunderstorm.png"

export default function WeatherCard(props) {
    const data = props.weatherData

    console.log(data)
    const {temp, humidity} = data.main
    const wind = data.wind.speed
    const weatherDescription = data.weather[0].main
    const city = data.name
    const country = data.sys.country
    const tempFahrenheit = (temp * 9/5) + 32
    const unixDate = data.dt
    const dateObject = new Date(unixDate * 1000)
    const options = { weekday: 'long', month: 'short', day: 'numeric'}
    const date = new Intl.DateTimeFormat('en-US', options).format(dateObject)

    const weatherTypes = {
        "Clear": clearSky,
        "Clouds": cloudyImage,
        "Rain": rainImage,
        "Drizzle": drizzleImage,
        "Thunderstorm": thunderstormImage,
        "Snow": snowImage,
        "Mist": mistImage,
        "Smoke": smokeImage,
        "Haze": hazeImage,
        "Dust": dustImage,
        "Fog": fogImage,
        "Sand": sandImage,
        "Ash": ashImage,
        "Squall": squallImage,
        "Tornado": tornadoImage
    }

    return (
        <div className="container">
            <div className="top-card">
                <div className="city">
                    <h1>{city}, {country}</h1>
                    <h2>{date}</h2>
                </div>
                <div className="weather">
                    <h1>{temp}°C</h1>
                    <h2>{tempFahrenheit.toFixed(2)}°F</h2>
                </div>
            </div>
            <div className="bottom-card">
                <img src={weatherTypes[weatherDescription]}></img>
                <h1 className="weather-description">{weatherDescription}</h1>
            </div>
        </div>
    )
}