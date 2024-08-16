import React from "react";

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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "No. of downloads (K)",
        data: [2, 6, 9, 7, 11],
        borderColor: "#C8ECCC",
        backgroundColor: "transparent",
        pointBorderColor: "#AAA",
        pointBackgroundColor: "#FEF1F1",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Number of downloads of our app",
      },
      scales: {
        y: [
          {
            ticks: {
              min: 0,
              max: 20,
              stepSize: 3,
            },
          },
        ],
      },
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
