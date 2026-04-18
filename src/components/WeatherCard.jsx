import "./WeatherCard.css"
import { weatherTypes } from "../weatherIcons/weatherIcons"
import raindrop from "../assets/raindrop.png"
import windImage from "../assets/wind (1).png"
import thermometer from "../assets/thermometer.png"

export default function WeatherCard({ weatherData, unit}) {
    const data = weatherData
    if (data.cod === "404") return null

    const {temp: tempCelsius, humidity, feels_like: feelsLikeCelsius} = data.main
    const windKm = (data.wind.speed * 3.6).toFixed(0)
    const windMi = (data.wind.speed * 2.237).toFixed(0)
    const { main, description} = data.weather[0]
    const city = data.name
    const country = data.sys.country
    const tempFahrenheit = ((tempCelsius * 9/5) + 32).toFixed(2)
    const feelsLikeFarenheit = ((feelsLikeCelsius * 9/5) + 32).toFixed(2)
    const unixDate = data.dt
    const dateObject = new Date(unixDate * 1000)
    const options = { weekday: 'long', month: 'short', day: 'numeric'}
    const date = new Intl.DateTimeFormat('en-US', options).format(dateObject)

    const temperature = unit === "metric" ? tempCelsius : tempFahrenheit
    const tempSymbol = unit === "metric" ? "°C" : "°F"
    const windSpeed = unit === "metric" ? windKm : windMi
    const windSymbol = unit === "metric" ? "km/h" : "mph"
    const feelsLike = unit === "metric" ? feelsLikeCelsius: feelsLikeFarenheit

    return (
        <div className="flex flex-col items-center px-1">
            {/* top half of card */}
            <div className="flex w-full max-w-sm md:max-w-lg lg:max-w-2xl bg-[#3B82F6] text-white mt-8 rounded-t-2xl">
                <div className="py-4 px-4 md:py-8 md:px-8 lg:px-16 flex flex-col justify-center gap-2">
                    <h1 className="text-4xl md:text-6xl font-semibold">{city}, {country}</h1>
                    <h2 className="text-xl md:text-3xl font-medium">{date}</h2>
                </div>
                <div className="mt-2 py-2 px-4 md:py-4 md:px-8 lg:px-16 flex flex-col justify-center">
                    <h1 className="text-4xl md:py-1 md:text-6xl font-semibold">{temperature}{tempSymbol}</h1>
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
                        <h2>Wind: {windSpeed}{windSymbol}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-12 h-12" src={thermometer}></img>
                        <h2>Feels like: {feelsLike}{tempSymbol}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}