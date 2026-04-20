import sun from "../assets/sunmode.png";
import moon from "../assets/moonmode.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Header({ unit, toggleUnit, theme: isDarkMode, toggleTheme }) {
  const tempSymbol = unit === "metric" ? "°C" : "°F";
  const imgMode = isDarkMode ? sun : moon
  const themeState = useContext(ThemeContext)
  return (
    <header className={`flex justify-between bg-[#3B82F6] p-4 ${themeState ? "text-white" : "#94a3b8"}`}>
      <h1 className="text-2xl font-bold">Weather App</h1>
      <div className="flex">
        <button className="w-8 h-8 mx-1 cursor-pointer" onClick={toggleTheme}>
            <img src={imgMode}></img>
        </button>
        <button
          className={`mx-2 px-2 font-bold text-[#3B82F6] rounded-lg cursor-pointer ${themeState ? "bg-[#F1F5F9]" : "bg-[#1e293b]"}`}
          onClick={toggleUnit}
        >
          {tempSymbol}
        </button>
      </div>
    </header>
  );
}
