import React, { useState } from "react";

function Search(props) {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  function handleChange(i, e) {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  function addFormFields() {
    setFormValues([...formValues, { name: "", email: "" }]);
  }

  function removeFormFields(i) {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }

  return (
    <div className="m-28 w-[75%]">
      <h1 className="bg-transparent text-4xl text-center">Search...</h1>

      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div
            className="flex flex-col items-center justify-center m-10"
            key={index}
          >
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={element.country || ""}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
              onChange={(e) => handleChange(index, e)}
            />
            <label>Indicator</label>
            <input
              type="text"
              name="indicator"
              value={element.indicator || ""}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
              onChange={(e) => handleChange(index, e)}
            />
            <div date-rangepicker className="flex items-center my-6">
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

            {index ? (
              <button
                type="button"
                className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        <div className="button-section">
          <button
            className="m-5 text-gray-200 bg-pink-500 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-pink-800"
            type="button"
            onClick={() => addFormFields()}
          >
            Add
          </button>
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
