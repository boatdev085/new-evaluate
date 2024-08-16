"use client";
import { styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const SectionInfo = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={500}
        color="black"
        sx={{ textAlign: "center" }}
      >
        อินโฟกราฟฟิคแนะนำการใช้งาน
      </Typography>
      <Image
        src="/static/bg/bg-header.png"
        alt="academic"
        width={206}
        height={440}
        style={{
          width: "100%",
          marginTop: "60px",
          objectFit: "cover",
          padding: "0 120px",
        }}
      />
    </Container>
  );
};

export default SectionInfo;

const Container = styled("div")`
  margin: 24px;
  padding: 60px 0;
`;
