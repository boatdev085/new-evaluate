"use client";
import WrapperLayout from "@/components/Layout";
import { Button, styled, Typography } from "@mui/material";
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
        <Typography variant="h3" style={{ textAlign: "center" }}>
          ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)
          <br />
          และการประเมินต้นทุนชีวิต
        </Typography>
        <div className="box">
          <Image
            src={"/static/profile/example-profile.png"}
            alt="academic"
            width={206}
            height={206}
            style={{
              borderRadius: "50%",

              objectFit: "cover",
            }}
          />
          <div className="text">
            <Typography variant="body1">
              คุณมากฤทธิ์ พิชิิตไพรี [Coach]
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: "23px",
                backgroundColor: "#FFDD24",
                padding: "13px 66px",
                borderRadius: "20px",
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
                marginTop: "23px",
                backgroundColor: "#FFDD24",
                padding: "13px 66px",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body2" fontWeight={500} color="black">
                ออกจากระบบ
              </Typography>
            </Button>
          </div>
        </div>
      </WrapperLayout>
    </Container>
  );
};

export default Header;

const Container = styled("div")`
  padding: 10px 0 220px 0;
  background-color: #8acefc;
  .box {
    display: flex;
    gap: 24px;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
