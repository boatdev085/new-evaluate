import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Context } from "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = [
  ["รูปแบบ", "การดูแลเลี้ยงดู", "แบบเข้มงวด"],
  ["รูปแบบ", "การดูแลเลี้ยงดู", "แบบมีส่วนร่วม"],
  ["รูปแบบ", "การดูแลเลี้ยงดู", "แบบตามใจ"],
];

export const data = {
  labels: ["", "", ""],
  datasets: [
    {
      label: "Series A",
      data: [20, 35, 10],
      backgroundColor: "#85E0A3",
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
    title: {
      display: false, // Hide the title
    },
    datalabels: {
      font: {
        weight: 500,
      },
      offset: -10,
      align: "center" as "center",
      anchor: "center" as "center",
      clip: true,
      formatter(lable: any, ctx: Context) {
        return labels[ctx.dataIndex];
      },
    },
  },
  scales: {
    x: {
      display: true, // Show the X-axis labels
    },

    y: {
      display: true, // Show the Y-axis labels
      ticks: {
        font: {
          size: 16, // Increase font size for Y-axis labels
        },
        stepSize: 5,
        // Set step size for better readability
      },
      beginAtZero: true, // Ensure the Y-axis starts at 0
    },
  },
  animation: {},
  maintainAspectRatio: false, // Allow customization of height
};

export function VerticalBarChart() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      {/* Fix the height here */}
      <Bar options={options} data={data} />
    </div>
  );
}
