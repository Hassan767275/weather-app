import sun from "../assets/sunmode.png"
import moon from "../assets/moonmode.png"

export default function Header() {
    return (
        <header className="flex justify-between bg-[#3B82F6] text-white p-4">
            <h1 className="text-2xl font-bold">Weather App</h1>
            <div className="flex">
                <img className="w-8 h-8 mx-1" src={sun}></img>
                <button className="mx-2 px-2 font-bold bg-white text-[#3B82F6] rounded-lg">°C</button>
            </div>
        </header>
    )
}