"use client";
import ChartDotCircle from "@/components/ChartDotCircle";
import { Box, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string | React.ReactNode;
};

const SectionChart = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
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
    </Box>
  );
};

export default SectionChart;

const Container = styled("div")`
  margin: 24px;
  padding: 60px 0;
`;
