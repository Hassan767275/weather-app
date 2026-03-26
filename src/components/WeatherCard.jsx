import "./WeatherCard.css"

export default function WeatherCard(props) {
    console.log(props.weatherData)
    const {temp, humidity} = props.weatherData.main
    const wind = props.weatherData.wind.speed
    const weatherDescription = props.weatherData.weather[0].description
    const city = props.weatherData.name
    const country = props.weatherData.sys.country
    const tempFahrenheit = (temp * 9/5) + 32
    const unixDate = props.weatherData.dt
    const dateObject = new Date(unixDate * 1000)
    const options = { weekday: 'long', month: 'short', day: 'numeric'}
    const date = new Intl.DateTimeFormat('en-US', options).format(dateObject)

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
        </div>
    )
}