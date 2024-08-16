"use client";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  src?: string;
  title?: string;
  children?: React.ReactNode;
};

const RecommendInfo = (props: Props) => {
  return (
    <Box sx={{ padding: "60px 0" }}>
      <Avatar
        src={props.src || "http://via.placeholder.com/260x260"}
        sx={{ width: 260, height: 260, margin: "0 auto" }}
      />
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "25px",
          padding: "40px",
          marginTop: "-25px",
        }}
      >
        <Typography variant="h5" fontWeight={500} textAlign="center">
          {props.title}
        </Typography>
        <Typography variant="h6" textAlign="center" marginBottom={"40px"}>
          คำแนะนำ
        </Typography>
        {props.children} 
      </Box>
    </Box>
  );
};

export default RecommendInfo;
