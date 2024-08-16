"use client";
import { styled, Typography } from "@mui/material";
import React from "react";

const SectionNameList = () => {
  return (
    <Container>
      <Typography variant="h4" fontWeight={500} color="black">
        รายชื่อนักวิชาการ
      </Typography>
    </Container>
  );
};

export default SectionNameList;

const Container = styled("div")`
  text-align: center;
  background-color: #8acefc;
  padding: 20px 0;
`;
