"use client";
import ChartDotCircle from "@/components/ChartDotCircle";
import { styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
};

const SectionChart = (props: Props) => {
  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={500}
        color="black"
        sx={{ textAlign: "center", marginBottom: "40px" }}
      >
        {props.title}
      </Typography>
      <ChartDotCircle />
    </Container>
  );
};

export default SectionChart;
const Container = styled("div")`
  margin: 24px;
  padding: 60px 0;
`;
