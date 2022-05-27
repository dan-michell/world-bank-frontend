import Networking from "../../networking";
import { useNavigate } from "react-router-dom";

function HistoryCard(props) {
  const networking = new Networking();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const countryData = await networking.fetchUserSearchData(
      [{ country: props.countryName }],
      [{ indicator: props.indicatorName }],
      props.startYear,
      props.endYear
    );
    props.changeCountryData(countryData);
    navigate("/landing-page/results");
  }

  return (
    <div className="w-[60%] rounded-lg bg-gray-300 shadow-xl mt-6">
      <div className="flex p-4">
        <div className="flex flex-col w-full">
          <h1 className="">
            {props.indicatorName} for {props.countryName} from {props.startYear} to {props.endYear}
          </h1>
          <h2 className=" text-md italic text-gray-700">Date searched: {props.createdAt.slice(0, 10)}</h2>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="self-start ml-4 text-gray-200 bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-sm
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
