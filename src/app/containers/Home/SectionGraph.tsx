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

type Props = {};

const SectionGraph = (props: Props) => {
  return (
    <Box marginBottom="60px">
      <Typography variant="h4" textAlign="center" marginBottom="26px">
        Sed ut perspiciatis unde omnis
      </Typography>
      <Typography
        variant="body2"
        color="rgb(0,0,0,0.8)"
        textAlign="center"
        padding="0 200px"
        marginBottom="80px"
      >
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem.
      </Typography>
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

export default SectionGraph;
