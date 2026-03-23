import { useState, useEffect } from "react"

export default function Search() {
    const [city, setCity] = useState("")
    const weatherApiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY

    function inputChange(formData) {
        let newCity = formData.get("city")
        setCity(newCity)
    }

    useEffect(() => {
        if (city !== "") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
                .then(res => res.json())
                .then(data => console.log(`The weather in the city you searched is ${data.main.temp} celcius`))
        }
    }, [city])

    return (
        <>
            <h1>Weather App</h1>
            <form action={inputChange}>
                <label htmlFor="weather-input">Search a city for weather: </label>
                <input type="search" id="city-input" name="city"></input>
            </form>        
        </>
    )
}