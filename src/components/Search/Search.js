import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Search(props) {
  const [indicatorFormValues, setIndicatorFormValues] = useState([
    { indicator: "" },
  ]);
  const [countryFormValues, setCountryFormValues] = useState([{ country: "" }]);
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [countryIndex, setCountryIndex] = useState(true);
  const [indicatorIndex, setIndicatorIndex] = useState(true);

  useEffect(() => {
    countryFormValues.forEach((element, index) => {
      if (index >= 1) {
        setCountryIndex(false);
      } else {
        setCountryIndex(true);
      }
    });
  }, [countryFormValues]);
  useEffect(() => {
    indicatorFormValues.forEach((element, index) => {
      if (index >= 1) {
        setIndicatorIndex(false);
      } else {
        setIndicatorIndex(true);
      }
    });
  }, [indicatorFormValues]);

  function handleIndicatorChange(i, e) {
    let newIndicatorFormValues = [...indicatorFormValues];
    newIndicatorFormValues[i][e.target.name] = e.target.value; //property of form called name for country and indicator
    setIndicatorFormValues(newIndicatorFormValues);
  }
  function handleCountryChange(i, e) {
    let newCountryFormValues = [...countryFormValues];
    newCountryFormValues[i][e.target.name] = e.target.value; //property of form called name for country and indicator
    setCountryFormValues(newCountryFormValues);
  }

  function addCountryFormFields() {
    setCountryFormValues([...countryFormValues, { country: "" }]);
  }
  function addIndicatorFormFields() {
    setIndicatorFormValues([...indicatorFormValues, { indicator: "" }]);
  }

  function removeCountryFormFields(i) {
    let newFormValues = [...countryFormValues];
    newFormValues.splice(i, 1);
    setCountryFormValues(newFormValues);
  }
  function removeIndicatorFormFields(i) {
    let newFormValues = [...indicatorFormValues];
    newFormValues.splice(i, 1);
    setIndicatorFormValues(newFormValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(indicatorFormValues));
  }

  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <h1 className="bg-transparent text-4xl text-center">Search...</h1>

      <form onSubmit={handleSubmit}>
        {countryFormValues.map((element, index) => (
          <div
            className="flex flex-col items-center justify-center m-10"
            key={index}
          >
            <input
              placeholder="Country"
              type="text"
              name="country"
              value={element.country || ""}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
              onChange={(e) => handleCountryChange(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
                onClick={() => removeCountryFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        {indicatorFormValues.map((element, index) => (
          <div
            className="flex flex-col items-center justify-center m-10"
            key={index}
          >
            <input
              type="text"
              placeholder="Indicator"
              name="indicator"
              value={element.indicator || ""}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
              onChange={(e) => handleIndicatorChange(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="mt-3 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
                onClick={() => removeIndicatorFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}

        <div className="flex justify-center items-center my-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="start"
              value={startYear}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 xs:text-xs rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
              placeholder="Start Year"
              onChange={(e) => {
                setStartYear(e.target.value);
              }}
            />
          </div>
          <span className="mx-4 text-gray-500">to</span>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="end"
              value={endYear}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 xs:text-xs rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5"
              placeholder="End Year"
              onChange={(e) => {
                setEndYear(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="justify-center items-center">
          {indicatorIndex ? (
            <button
              data-testid="remove-button"
              className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
              type="button"
              onClick={() => addCountryFormFields()}
            >
              Add Country
            </button>
          ) : null}
          {countryIndex ? (
            <button
              className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
              type="button"
              onClick={() => addIndicatorFormFields()}
            >
              Add Indicator
            </button>
          ) : null}
          <button
            className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
