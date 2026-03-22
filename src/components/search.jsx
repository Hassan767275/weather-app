export default function Search() {

    function inputChange(formData) {
        const city = formData.get("city")
        console.log(city)
    }

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