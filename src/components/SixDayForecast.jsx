import { weatherTypes } from "../weatherIcons/weatherIcons.js";

export default function FiveDayForcast({ dailyForecast }) {
  if (!dailyForecast) return null;

  return (
    <div className="flex">
      {Object.entries(dailyForecast).map(
        ([day, { maxTemp, minTemp, description }]) => (
          <div className="flex flex-col items-center" key={day}>
            <h1 className="text-2xl text-[#3B82F6] font-bold">{day}</h1>
            <img className="w-16 h-16" src={weatherTypes[description]}></img>
            <div>
              <h1>{maxTemp}</h1>
              <h1>{minTemp}</h1>
            </div>
          </div>
        ),
      )}
    </div>
  );
}