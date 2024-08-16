"use client";
import { Avatar, Box, Button, Grid, styled, Typography } from "@mui/material";
import React from "react";

type Props = {};

const SectionEvaluation = (props: Props) => {
  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={400}
        color="black"
        textAlign={"center"}
        marginBottom={"40px"}
      >
        การประเมินการเลี้ยงดูเชิงบวก
      </Typography>
      <Box sx={{ backgroundColor: "#FAEC9E" }}>
        <Box
          sx={{
            maxWidth: "530px",
            margin: "0 auto",
            padding: "60px 0",
          }}
        >
          <Grid container spacing={4} textAlign={"center"}>
            <Grid item xs={6}>
              <Avatar
                src="/static/profile/positive-parenting.png"
                sx={{ width: 250, height: 250 }}
              />
              <Button
                href="/user/positive-parenting/advice"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#F6A2FD",
                  borderRadius: "25px",
                  padding: "13px 30px",
                }}
              >
                ประเมินการเลี้ยงดูเชิงบวก
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Avatar
                src="/static/profile/cost-of-life.png"
                sx={{ width: 250, height: 250 }}
              />
              <Button
                href="/user/cost-of-life/advice"
                variant="contained"
                sx={{
                  marginTop: "20px",
                  backgroundColor: "#FE7E6B",
                  borderRadius: "25px",
                  padding: "13px 30px",
                }}
              >
                ประเมินต้นทุนชีวิต
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SectionEvaluation;

const Container = styled("div")`
  margin: 24px;
  padding: 60px 0;
`;
