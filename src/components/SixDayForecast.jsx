import { weatherTypes } from "../weatherIcons/weatherIcons.js";
import { useContext } from "react";
import { ThemeContext } from "../App.jsx";

export default function SixDayForcast({ dailyForecast, unit }) {
  if (!dailyForecast) return null;
  const tempSymbol = unit === "metric" ? "°C" : "°F"
  const themeState = useContext(ThemeContext)

  function getTemp(temp) {
    return unit === "metric" ? temp : ((temp * 9/5) + 32).toFixed(2)
  }

  return (
    <div className="flex justify-center pb-16">
        <div className="grid grid-cols-2 gap-2 p-1 w-full max-w-sm md:max-w-lg md:grid-cols-3 lg:max-w-2xl">
        {Object.entries(dailyForecast).map(
            ([day, { maxTemp, minTemp, description }]) => (
            <div className={`flex flex-col items-center w-full shadow-md shadow-[#3B82F6] rounded-2xl ${themeState ? "bg-[#F1F5F9]" : "bg-[#1e293b]"}`} key={day}>
                <h1 className="text-2xl text-[#3B82F6] font-bold pt-2">{day}</h1>
                <img className="w-16 h-16 p-2" src={weatherTypes[description]}></img>
                <div className="flex flex-col items-center pb-2 text-[#3B82F6] font-semibold">
                <h1>H: {getTemp(maxTemp)}{tempSymbol}</h1>
                <h1>L: {getTemp(minTemp)}{tempSymbol}</h1>
                </div>
            </div>
            ),
        )}
        </div>
    </div>
  );
}