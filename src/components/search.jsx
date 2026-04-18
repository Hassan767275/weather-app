import "./search.css";

export default function Search({ inputChange, error }) {
  return (
    <div className="flex flex-col items-center px-1">
      <h1 className="mt-20 text-4xl md:text-5xl text-[#0EA5E9] font-bold px-1">
        How's the sky looking today?
      </h1>
      <form
        className="flex items-center w-full max-w-sm md:max-w-lg mt-4 mx-auto"
        action={inputChange}
      >
        <input
          type="search"
          className={
            `flex-1 mr-2 bg-[#FFFFFF] border-2 rounded-xl p-1
            ${error ? `border-red-900 placeholder-red-900` : `border-[#BAE6FD]`}`}
          name="city"
          placeholder={
            error
              ? "Please choose a valid city"
              : "Search a city for weather"
          }
        ></input>
        <button
          className="bg-[#0EA5E9] py-1 px-2 text-white rounded-lg cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
