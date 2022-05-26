import HistoryCard from "./HistoryCard";

function History(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mt-4 mb-6">History</h1>
      <HistoryCard />
      <HistoryCard />
    </div>
  );
}

export default History;
