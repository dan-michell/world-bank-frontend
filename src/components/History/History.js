function History(props) {
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 ">History</h1>
      <div class="flex justify-center">
        <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          <li class=" flex items-center justify-between px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            <div>A first item</div>
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="text-gray-200 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-10px sm:w-auto px-5 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-blue-800"
              onClick={(e) => {
                console.log("View page: " + e.target);
              }}
            >
              View
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default History;
