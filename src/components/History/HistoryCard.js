function HistoryCard(props) {
  return (
    <div className="mt-3 w-[50%] border-2 border-gray-400 rounded-lg bg-gray-200">
      <div className="flex px-6 py-2 justify-between ">
        <h1 className="  ">A first item</h1>
        <button
          type="submit"
          className=" text-gray-200 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm
               px-4 py-1 text-center dark:bg-gray-600
            dark:hover:bg-gray-500"
        >
          View
        </button>
      </div>
    </div>
  );
}

export default HistoryCard;
