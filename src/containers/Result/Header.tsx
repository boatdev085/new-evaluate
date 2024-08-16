"use client";
import { Avatar, Box, Grid, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Header = (props: Props) => {
    const {push} = useRouter();
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={"auto"}>
          <Avatar
            src="/static/profile/example-profile.png"
            sx={{ width: 165, height: 165 }}
          />
        </Grid>
        <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
          <Typography>
            คุณชยธร มายอด [บิดา-มารดา / ผู้ปกครอง]
            <br />
            อายุ ณ วันทำแบบประเมิน 55 ปี 4 เดือน
            <br />
            วันที่ทำแบบประเมิน 09/06/2024
          </Typography>
        </Grid>
        <Grid item xs={"auto"}>
          <Stack spacing={2} flexWrap={"nowrap"} direction={"row"}>
            <Box sx={{ cursor: "pointer" }} onClick={() => window.print()}>
              <Image
                src="/static/profile/print.png"
                width={70}
                height={70}
                alt="print"
              />
            </Box>
            <Box sx={{ marginRight: "10px", cursor: "pointer" }} onClick={() => push("/user")}>
              <Image
                src="/static/profile/reboot.png"
                width={70}
                height={70}
                alt="reboot"
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

const Container = styled("div")`
  padding: 40px 0px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.5);
  margin-bottom: 60px;
`;
