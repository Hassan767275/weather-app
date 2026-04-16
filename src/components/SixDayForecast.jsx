import {weatherTypes} from "../weatherIcons/weatherIcons.js"

export default function FiveDayForcast({ day, maxTemp, minTemp, description}) {
    
    return (
        <div className="flex flex-col items-center">
            <h1>{day}</h1>
            <img className="w-16 h-16" src={weatherTypes[description]}></img>
            <div>
                <h1>{maxTemp}</h1>
                <h1>{minTemp}</h1>
            </div>
        </div>
    )
}