import "./search.css"

export default function Search(props) {
    return (
        <div className="search">
            <h1>How's the sky looking today?</h1>
            <form className="search-form" action={props.inputChange}>
                <input type="search" className="city-input" name="city" placeholder="Search a city for weather"></input>
                <button className="search-button" type="submit">Search</button>
            </form>        
        </div>
    )
}