"use client";
import WrapperLayout from "@/components/Layout";
import styled from "@emotion/styled";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  image?: string;
  title?: string | React.ReactNode;
  bgColor?: string;
  type?: keyof typeof mapType;
};

const mapType = {
  "positive-parenting": {
    color: "#00D1FF",
    title: "ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)",
    image: "/static/form/cartoon-positive-parenting.png",
  },
  "cost-of-life": {
    color: "#FF00FF",
    title: "ระบบประเมินการต้นทุนชีวิต",
    image: "/static/form/cartoon-cost-of-life.png",
  },
};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: props.bgColor,
        padding: "10px 0 260px 0",
      }}
    >
      <WrapperLayout sx={{ position: "relative", zIndex: 1 }}>
        <Image
          src="/static/login/logo.png"
          width={160}
          height={220}
          alt="logo"
        />
        <Typography variant="h3" textAlign={"center"}>
          {props.title}
        </Typography>
        <Box maxWidth={"530px"} margin="0 auto" marginTop={"40px"}>
          <Grid
            container
            alignContent={"center"}
            columnSpacing={2}
            alignItems={"center"}
          >
            <Grid item xs={"auto"}>
              <Avatar
                src="/static/profile/example-profile.png"
                sx={{
                  width: 165,
                  height: 165,
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <Stack spacing={2}>
                <Typography variant="body1">
                  คุณชยธร มายอด [บิดามา-มารดา / ผู้ปกครอง]
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#FFDD24",
                    padding: "13px 66px",
                    borderRadius: "20px",
                    maxWidth: "250px",
                  }}
                  onClick={() => router.push("/user/edit")}
                >
                  <Typography variant="body2" fontWeight={500} color="black">
                    แก้ไขข้อมูลส่วนตัว
                  </Typography>
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    backgroundColor: "#FFDD24",
                    padding: "13px 66px",
                    borderRadius: "20px",
                    maxWidth: "250px",
                  }}
                >
                  <Typography variant="body2" fontWeight={500} color="black">
                    ออกจากระบบ
                  </Typography>
                </Button>
              </Stack>
              <Box mt={4}>
                <Box
                  display={"inline-flex"}
                  gap={1}
                  borderRadius={2}
                  sx={{ backgroundColor: "#FFDD24", color: "#007AFF" }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "rgb(120, 120, 128,0.12)",
                      borderRadius: 2,
                      padding: "4px 8px",
                    }}
                  >
                    {dayjs().format("MMM DD, YYYY")}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "rgb(120, 120, 128,0.12)",
                      borderRadius: 2,
                      padding: "4px 8px",
                    }}
                  >
                    {dayjs().format("H:mm A")}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </WrapperLayout>
      {props.image && (
        <FloatImage src={props.image} width={714} height={585} alt="logo" />
      )}
    </Box>
  );
};

export default Header;

const FloatImage = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  width: 42.44%;
  height: auto;
  min-width: 300px;
`;
