import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Search(props) {
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  useEffect(() => {
    console.log(country);
  }, [country]);

  useEffect(() => {
    console.log(indicator);
  }, [indicator]);

  useEffect(() => {
    console.log(startYear);
  }, [startYear]);

  useEffect(() => {
    console.log(endYear);
  }, [endYear]);

  return (
    <div className="mt-28">
      <h1 className="bg-transparent text-4xl text-center">Search...</h1>
      <form className="flex flex-col items-center justify-center">
        <div className="">
          <div className="relative z-0 w-[100%] mb-6 group">
            <input
              type="text"
              name="country"
              value={country}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
              placeholder=" "
              requipink
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <label
              htmlFor="country"
              className="peer-focus:font-medium absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Country
            </label>
          </div>

          <div className="relative z-0 w-[100%] mb-6 group">
            <input
              type="text"
              value={indicator}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
              placeholder=" "
              onChange={(e) => {
                setIndicator(e.target.value);
              }}
            />
            <label
              htmlFor="indicator"
              className="peer-focus:font-medium absolute text-sm text-gray-600 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-500 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Indicator
            </label>
          </div>

          <div date-rangepicker class="flex items-center">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="start"
                value={startYear}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 xs:text-xs rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
                placeholder="Start Year"
                onChange={(e) => {
                  setStartYear(e.target.value);
                }}
              />
            </div>
            <span class="mx-4 text-gray-500">to</span>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="end"
                value={endYear}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 xs:text-xs rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
                placeholder="End Year"
                onChange={(e) => {
                  setEndYear(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default Search;
