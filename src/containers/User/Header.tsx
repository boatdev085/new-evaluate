"use client";
import WrapperLayout from "@/components/Layout";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <Container>
      <WrapperLayout>
        <Image
          src="/static/login/logo.png"
          width={160}
          height={220}
          alt="logo"
        />
        <Typography variant="h3" textAlign={"center"}>
          ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)
          <br />
          และการประเมินต้นทุนชีวิต
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
                  onClick={() => router.push("/login")}
                >
                  <Typography variant="body2" fontWeight={500} color="black">
                    ออกจากระบบ
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </WrapperLayout>
    </Container>
  );
};

export default Header;

const Container = styled("div")`
  position: relative;
  padding: 10px 0 260px 0;
  background-color: #8acefc;
`;
