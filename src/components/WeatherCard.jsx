export default function WeatherCard(props) {
    console.log(props.weatherData)
    const {temp, humidity} = props.weatherData.main
    const wind = props.weatherData.wind.speed
    const weatherDescription = props.weatherData.weather[0].description

    const tempFahrenheit = (temp * 9/5) + 32

    return (
        <div>
            <div>
                <h2>{temp}°C</h2>
                <h2>{tempFahrenheit.toFixed(2)}°F</h2>
                <h2>Humidity: {humidity}%</h2>
                <h2>Wind speed: {wind} km/h</h2>
                <h2>Weather description: {weatherDescription}</h2>
            </div>
        </div>
    )
}