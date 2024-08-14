"use client";
import VideoSection from "@/components/VideoSecton";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

const SectionFooter = (props: Props) => {
  return (
    <Container>
      <Grid container columnSpacing={4} alignItems={"center"}>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "#FAEC9E",
              borderRadius: "25px",
              padding: "13px 20px",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={400}
              color="black"
              textAlign={"center"}
            >
              วิดีโอแนะนำการใช้งาน
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <VideoSection
            src="https://www.youtube.com/embed/fug0upcTz_M?si=dfxa1TCwBA6rumU5"
            width={"100%"}
            height={"260px"}
          />
        </Grid>
        <Grid item xs={4}>
          <VideoSection
            src="https://www.youtube.com/embed/fug0upcTz_M?si=dfxa1TCwBA6rumU5"
            width={"100%"}
            height={"260px"}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionFooter;
const Container = styled("div")`
  margin: 24px;
  padding: 60px 0;
`;
