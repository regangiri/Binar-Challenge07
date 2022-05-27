import React from "react";
import { Line, Pie, Radar } from "react-chartjs-2";
import "chart.js/auto";
import { faker } from "@faker-js/faker";

function Chart() {
  const labels = ["Innova", "APV", "Nissan", "Mercy", "BMW"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Jumlah pembelian",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: "rgb(255,99,132)",
        data: labels.map(() => faker.datatype.number({ min: 10, max: 100 })),
      },
    ],
  };

  return (
    <div>
      <Line className="w-1/2 h-1/2" options={options} data={data} />
    </div>
  );
}

export default Chart;
