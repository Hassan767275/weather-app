import "./FiveDayForecast.css"

export default function FiveDayForcase(props) {
    const fiveDayForecast = props.forecast.list
    console.log(fiveDayForecast)
    const forecastObject = {}

    for (let i = 0; i < fiveDayForecast.length; i++) {
        const dateObject = new Date(fiveDayForecast[i].dt * 1000)
        const options = { weekday: 'short'}
        const date = new Intl.DateTimeFormat('en-US', options).format(dateObject)
        const {temp_max, temp_main} = fiveDayForecast[i].main

        if (!forecastObject[date]) {
            forecastObject[date] = []
        }
        forecastObject[date].push(temp_max, temp_main)
    }
    console.log(forecastObject)


    return (
        <div className="five-day-container">
            <h1 className="five-title">5 Day Forecast</h1>
        </div>
    )
}