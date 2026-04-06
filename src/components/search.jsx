import "./search.css"

export default function Search(props) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-20 text-4xl text-[#0EA5E9] font-bold">How's the sky looking today?</h1>
            <form className="mt-4" action={props.inputChange}>
                <input type="search" className="mr-2 bg-[#FFFFFF] border-2 border-[#BAE6FD] rounded-xl p-1" name="city" placeholder="Search a city for weather"></input>
                <button className="bg-[#0EA5E9] py-1 px-3 text-white rounded-lg" type="submit">Search</button>
            </form>        
        </div>
    )
}