import sun from "../assets/sunmode.png";
import moon from "../assets/moonmode.png";

export default function Header({ unit, toggleUnit, theme, toggleTheme }) {
  const tempSymbol = unit === "metric" ? "°C" : "°F";
  const imgMode = theme === "light" ? sun : moon

  return (
    <header className="flex justify-between bg-[#3B82F6] text-white p-4">
      <h1 className="text-2xl font-bold">Weather App</h1>
      <div className="flex">
        <button className="w-8 h-8 mx-1 cursor-pointer" onClick={toggleTheme}>
            <img src={imgMode}></img>
        </button>
        <button
          className="mx-2 px-2 font-bold bg-white text-[#3B82F6] rounded-lg cursor-pointer"
          onClick={toggleUnit}
        >
          {tempSymbol}
        </button>
      </div>
    </header>
  );
}
