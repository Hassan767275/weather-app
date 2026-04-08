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
import raindrop from "../assets/raindrop.png"
import windImage from "../assets/wind (1).png"
import thermometer from "../assets/thermometer.png"

export default function WeatherCard(props) {
    const data = props.weatherData

    const {temp, humidity, feels_like} = data.main
    const wind = data.wind.speed
    const { main, icon, description} = data.weather[0]
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
        <div className="flex flex-col items-center px-1">
            {/* top half of card */}
            <div className="flex w-full max-w-sm md:max-w-lg lg:max-w-2xl bg-[#3B82F6] text-white mt-8 rounded-t-2xl">
                <div className="py-4 px-4 md:py-8 md:px-8 lg:px-16 flex flex-col justify-center gap-2">
                    <h1 className="text-4xl md:text-6xl font-semibold">{city}, {country}</h1>
                    <h2 className="text-xl md:text-3xl font-medium">{date}</h2>
                </div>
                <div className="mt-2 py-2 px-4 md:py-4 md:px-8 lg:px-16 flex flex-col justify-center">
                    <h1 className="text-4xl md:py-1 md:text-6xl font-semibold">{temp}°C</h1>
                    <h2 className="text-xl md:text-4xl">{description}</h2>
                </div>
            </div>

            {/* bottom half of card */}
            <div className="w-full max-w-sm md:max-w-lg lg:max-w-2xl bg-[#F1F5F9] text-[#60A5FA] py-1.25 px-2.5 shadow-md shadow-[#3B82F6] rounded-b-2xl">
                <div className="flex">
                    <img className="w-12 h-12" src={weatherTypes[main]}></img>
                    <h1 className="ml-2 pt-3 font-bold text-lg md:pt-2 md:text-3xl">{main}</h1>
                </div>
                <hr className="my-2 bg-color-[#60A5FA] border-t-2"></hr>
                <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12" src={raindrop}></img>
                        <h2>Humidity: {humidity}%</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12" src={windImage}></img>
                        <h2>Wind: {wind}km\h</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12" src={thermometer}></img>
                        <h2>Feels like: {feels_like}°C</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}