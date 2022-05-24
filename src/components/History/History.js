import HistoryCard from "./HistoryCard";

function History(props) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="bg-transparent text-4xl">History</h1>
      <HistoryCard />
    </div>
  );
}

export default History;
