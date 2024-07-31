"use client";
import WrapperLayout from "@/components/Layout";
import { Button, Divider, styled, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <Container>
      <Header />
      <WrapperLayout sx={{ marginTop: "74px" }}>
        <BoxLogin>
          <Typography variant="h5" fontWeight={500}>
            เข้าสู่ระบบ
          </Typography>
          <CustomTextField placeholder="อีเมล" sx={{ width: "520px" }} />
          <CustomTextField
            type="password"
            placeholder="รหัสผ่าน"
            sx={{ width: "520px" }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#8ACEFC",
              padding: "10px 80px",
              borderRadius: "20px",
              width: "280px",
            }}
          >
            <Typography variant="body2" fontWeight={500} color="white">
              เข้าสู่ระบบ
            </Typography>
          </Button>
          <Divider sx={{ width: "1013px", background: "#8ACEFC" }} />
          <Typography variant="h5" fontWeight={500}>
            หรือเข้าสู่ระบบด้วย
          </Typography>
          <CustomButton
            variant="text"
            color="primary"
            onClick={() => signIn("google")}
          >
            <Image
              src="/static/login/google.png"
              alt="google"
              width={55}
              height={55}
            />
            <Typography variant="body1">
              ลงทะเบียนเข้าใช้งานด้วยบัญชี Google
            </Typography>
          </CustomButton>

          <CustomButton
            variant="text"
            color="primary"
            sx={{
              backgroundColor: "#3F5DC8",
              border: "none",
              ":hover": {
                backgroundColor: "#3F5DC8",
              },
            }}
            onClick={() => signIn("facebook")}
          >
            <Image
              src="/static/login/facebook.png"
              alt="facebook"
              width={70}
              height={55}
            />
            <Typography variant="body1" color="white">
              ลงทะเบียนเข้าใช้งานด้วยบัญชี Facebook
            </Typography>
          </CustomButton>
          <CustomButton
            variant="text"
            color="primary"
            sx={{
              backgroundColor: "#1CB146",
              border: "none",

              ":hover": {
                backgroundColor: "#1CB146",
              },
            }}
            onClick={() => signIn("line")}
          >
            <Image
              src="/static/login/line.png"
              alt="line"
              width={70}
              height={55}
            />
            <Typography variant="body1" color="white">
              ลงทะเบียนเข้าใช้งานด้วยบัญชี Line
            </Typography>
          </CustomButton>
        </BoxLogin>
        <Link href="/register">
          <BoxRegister>
            <Typography variant="h4">
              <i>หากยังไม่มีบัญชีผู้ใช้งาน คลิก</i>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#8ACEFC",
                padding: "10px 80px",
                borderRadius: "20px",
                width: "280px",
              }}
            >
              <Typography variant="body2" fontWeight={500} color="black">
                สมัครสมาชิก
              </Typography>
            </Button>
          </BoxRegister>
        </Link>
        <Footer />
      </WrapperLayout>
    </Container>
  );
};

export default Login;

const Container = styled("main")`
  background-color: #ffdd24;
`;

const BoxLogin = styled("div")`
  padding: 30px 0 120px 0;
  margin-bottom: 150px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 38px;
`;

const CustomTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 20px;
    border: 1px solid #8acefc !important;
    input {
      ::placeholder {
        text-align: center;
      }
    }
  }
`;

const CustomButton = styled(Button)`
  padding: 3px 36px;
  width: 524px;
  color: black;
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid #000;
  box-shadow: none;
  gap: 30px;
`;

const BoxRegister = styled("div")`
  cursor: pointer;
  background-color: #fff;
  border-radius: 20px;
  padding: 60px 90px;
  margin: 0 auto;
  margin-bottom: 100px;
  width: 950px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
