export default function FiveDayForcast({ day, maxTemp, minTemp}) {
    
    return (
        <div className="five-day-container">
            <h1>{day}</h1>
            <div>
                <h1>{maxTemp}</h1>
                <h1>{minTemp}</h1>
            </div>
        </div>
    )
}