import HistoryCard from "./HistoryCard";
import { useState, useEffect } from "react";
import Networking from "../../networking";

function History(props) {
  const [history, setHistory] = useState([]);
  const networking = new Networking();

  useEffect(() => {
    async function fetchUserHistory() {
      const userData = await networking.fetchHistoryData();
      setHistory(userData);
    }
    fetchUserHistory();
    // eslint-disable-next-line
  }, []);

  function populateHistoryCards() {
    return history.map((element) => {
      return (
        <HistoryCard
          key={element.id}
          countryName={element.country_name}
          indicatorName={element.indicator}
          startYear={element.start_year}
          endYear={element.end_year}
          createdAt={element.created_at}
          changeCountryData={props.changeCountryData}
        />
      );
    });
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mt-4 mb-6">History</h1>
      {populateHistoryCards()}
    </div>
  );
}

export default History;
