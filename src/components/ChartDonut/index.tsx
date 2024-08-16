import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Context } from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend);
const labels = ["อุดรานี", "สกลคร", "ระยอง", "ชลุรี", "ปราจีบุรี"];
export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [30, 22, 18, 25, 12],
      backgroundColor: ["#80CAFF", "#FFAFA3", "#FFC470", "#FFD966", "#85E0A3"],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      formatter(lable: any, ctx: Context) {
        return labels[ctx.dataIndex];
      },

      textStrokeWidth: 0.5,
    },
  },
};

export default function ChartDonut() {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
