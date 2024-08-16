"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data: ChartData<"radar", number[], string> = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2],
      borderColor: "green",
      backgroundColor: "transparent",
      borderWidth: 2,
      pointBorderWidth: 5,
    },
    {
      label: "# of Votes 2",
      data: [1, 2, 3, 4, 5],
      borderColor: "red",
      backgroundColor: "transparent",
      borderWidth: 2,
      pointBorderWidth: 5,
    },
  ],
};

const option: any = {
  plugins: {
    // tooltip: {
    //   titleFont: {
    //     size: 20,
    //   },
    //   bodyFont: {
    //     size: 20,
    //   },
    // },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        // boxWidth: 36,
        // padding: 40,
        // font: {
        //   size: 16,
        // },
      },
      align: "center",
    },
  },
};

type Props = {
  data?: ChartData<"radar", number[], string>;
  option?: any;
};

const ChartDotCircle = (props: Props) => {
  return (
    <Box marginBottom="60px">
      <Box
        width="100%"
        height="913px"
        padding="0 20px"
        display="flex"
        justifyContent="center"
      >
        <Radar data={data} options={option} />
      </Box>
    </Box>
  );
};

export default ChartDotCircle;
