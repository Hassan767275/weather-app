import {weatherTypes} from "../weatherIcons/weatherIcons.js"

export default function FiveDayForcast({ day, maxTemp, minTemp, description}) {
    
    return (
        <div className="five-day-container">
            <h1>{day}</h1>
            <img src={weatherTypes[description]}></img>
            <div>
                <h1>{maxTemp}</h1>
                <h1>{minTemp}</h1>
            </div>
        </div>
    )
}