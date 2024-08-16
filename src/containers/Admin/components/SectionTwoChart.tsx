"use client";
import ChartDonut from "@/components/ChartDonut";
import LineChart from "@/components/ChartLine";
import { VerticalBarChart } from "@/components/VerticalBarChart";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";

const SectionTwoChart = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "50px", paddingBottom: "150px" }}
      >
        <Grid item xs={8}>
          <Item>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <ChartDonut />
        </Grid>
      </Grid>
    </>
  );
};

export default SectionTwoChart;

const Item = styled("div")`
  border-radius: 10px;
  border-color: #e0e0e0;
  border-style: solid;
  border-width: 1px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
