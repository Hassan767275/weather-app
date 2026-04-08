import "./FiveDayForecast.css"

export default function FiveDayForcase(props) {
    const fiveDayForecast = props.forecast.list

    return (
        <div className="five-day-container">
            <h1 className="five-title">5 Day Forecast</h1>
        </div>
    )
}