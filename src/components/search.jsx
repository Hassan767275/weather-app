import "./search.css"

export default function Search(props) {
    return (
        <div className="flex flex-col items-center px-1">
            <h1 
                className="mt-20 text-4xl text-[#0EA5E9] font-bold px-1">
                    How's the sky looking today?
            </h1>
            <form className="flex items-center w-full max-w-sm md:max-w-md mt-4 mx-auto" action={props.inputChange}>
                <input 
                    type="search" 
                    className="flex-1 mr-2 bg-[#FFFFFF] border-2 border-[#BAE6FD] rounded-xl p-1" 
                    name="city" 
                    placeholder="Search a city for weather">
                </input>
                <button 
                    className="bg-[#0EA5E9] py-1 px-2 text-white rounded-lg" 
                    type="submit">
                        Search
                </button>
            </form>        
        </div>
    )
}