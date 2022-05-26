import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function Results(props) {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const labels = props.countryData.map((element) => {
    return element.year;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: props.countryData[0].countryname,
        data: props.countryData.map((element) => {
          return element.value;
        }),
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: props.countryData[0].indicatorname,
      },
    },
  };

  return (
    <div className="mx-[15%] my-[3%] w-[70%] h-[70%]">
      <Line data={data} options={options} />
    </div>
  );
}

export default Results;
