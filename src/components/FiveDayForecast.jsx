import "./FiveDayForecast.css"

export default function FiveDayForcast({ day, maxTemp, minTemp}) {
    
    return (
        <div className="five-day-container">
            <h1>{day} {maxTemp} {minTemp}</h1>
        </div>
    )
}