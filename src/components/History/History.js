import HistoryCard from "./HistoryCard";

function History(props) {
  function populateHistoryCards() {
    object.forEach((element) => {
      return (
        <HistoryCard
          user={element.user}
          country_name={element.country_name}
          indicator_name={element.indicator_name}
          start_year={element.start_year}
          end_year={element.end_year}
          created_at={element.created_at}
        />
      );
      //user, countryname, indicator, startyear, endyear
      // createdAt
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
