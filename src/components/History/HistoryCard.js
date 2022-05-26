function HistoryCard(props) {
  return (
    <div className="w-[50%] rounded-lg bg-gray-300 shadow-xl mb-6">
      <div className="p-4 flex justify-between ">
        <h1 className="">A first item</h1>
        <button
          type="submit"
          className="text-gray-200 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm
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
