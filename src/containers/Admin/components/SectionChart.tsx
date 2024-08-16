"use client";
import { VerticalBarChart } from "@/components/VerticalBarChart";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";

const SectionChart = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "50px", paddingBottom: "150px" }}
      >
        <Grid item xs={4}>
          <VerticalBarChart />
          <Typography
            variant="body2"
            color="black"
            sx={{ textAlign: "center" }}
          >
            การมีส่วนร่วมในการกำหนดเป้าหมายการใช้ชีวิตลูก
            และขอบเขตการดูแลเลี้ยงดู
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <VerticalBarChart />
          <Typography
            variant="body2"
            color="black"
            sx={{ textAlign: "center" }}
          >
            การยอมรับ และตอบสนองความต้องการตามวัย
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <VerticalBarChart />
          <Typography
            variant="body2"
            color="black"
            sx={{ textAlign: "center" }}
          >
            วิธีการสร้างวินัย
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionChart;

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
