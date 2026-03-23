import { useState, useEffect } from "react"

export default function Search() {
    const [city, setCity] = useState("")

    function inputChange(formData) {
        let newCity = formData.get("city")
        setCity(newCity)
    }

    useEffect(() => {
        console.log("new city entered")
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