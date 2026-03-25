import "./search.css"

export default function Search(props) {
    return (
        <div className="search">
            <h1>How's the sky looking today?</h1>
            <form className="search=form" action={props.inputChange}>
                <label htmlFor="weather-input">Search a city for weather: </label>
                <input type="search" id="city-input" name="city"></input>
                <button type="submit">Search</button>
            </form>        
        </div>
    )
}