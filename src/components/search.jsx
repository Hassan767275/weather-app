export default function Search(props) {
    return (
        <>
            <h1>Weather App</h1>
            <form action={props.inputChange}>
                <label htmlFor="weather-input">Search a city for weather: </label>
                <input type="search" id="city-input" name="city"></input>
            </form>        
        </>
    )
}