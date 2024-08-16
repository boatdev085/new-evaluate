"use client";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";

type Props = {
  title?: string;
};

const SectionBoxData = (props: Props) => {
  const data = [
    {
      title: "จำนวนผู้ใช้งานทั้งหมดในระบบ [คน]",
      number: "45,678",
      percentage: "+20% month over month",
    },
    {
      title: "จำนวนแบบประเมินการเลี้ยงดูด้วยวินัยเชิงบวก",
      number: "2,405",
      percentage: "+33% month over month",
    },
    {
      title: "จำนวนแบบประเมินต้นทุนชีวิต",
      number: "10,353",
      percentage: "-8% month over month",
    },
  ];
  return (
    <>
      {props.title ? (
        <Typography variant="h5" color="black" sx={{ marginTop: "80px" }}>
          {props.title}
        </Typography>
      ) : null}

      <Grid container spacing={4} style={{ marginTop: "50px" }}>
        {data.map((item, index) => (
          <Grid item xs={4} key={`data_${index + 1}`}>
            <Item>
              <Typography variant="body2" color="black">
                {item.title}
              </Typography>
              <Typography variant="h5" color="black">
                {item.number}
              </Typography>
              <Typography variant="body2" color="#828282">
                {item.percentage}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SectionBoxData;

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
