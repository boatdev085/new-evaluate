"use client";
import { Box, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const SectionContent = (props: Props) => {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "inline-block",
            backgroundColor: "#8ACEFC",
            padding: "13px 30px",
            transform: "translateY(50%)",
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={400}
            color="black"
            textAlign={"center"}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#EEECEC", padding: "60px 40px 40px 40px" }}>
        {props.children}
      </Box>
    </Container>
  );
};

export default SectionContent;

const Container = styled("div")`
  margin: 24px;
  padding: 60px 0;
`;
