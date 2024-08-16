"use client";
import WrapperLayout from "@/components/Layout";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "./components/Header";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

type Props = {};

const Register = (props: Props) => {
  return (
    <Container>
      <Header />
      <WrapperLayout sx={{ marginTop: "74px" }}>
        <BoxRegister>
          <div>
            <Typography variant="h5" fontWeight={500} align="center">
              ลงทะเบียนสมาชิกด้วยอีเมล
            </Typography>
            <Typography variant="body2" fontWeight={500} marginTop="10px">
              ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)และการประเมินต้นทุนชีวิต
            </Typography>
          </div>
          <Box display="flex" alignItems="center" gap="30px">
            <CustomTextField placeholder="ชื่อจริง" sx={{ width: "407px" }} />
            <CustomTextField placeholder="นามสกุล" sx={{ width: "407px" }} />
          </Box>
          <CustomTextField placeholder="อีเมล" sx={{ width: "840px" }} />
          <CustomTextField
            type="password"
            placeholder="กำหนดรหัสผ่าน"
            sx={{ width: "840px" }}
          />
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="30px"
            width="100%"
            paddingLeft="220px"
          >
            <Typography>เข้าใช้งานในฐานะ</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#8ACEFC",
                padding: "10px 0",
                borderRadius: "20px",
                width: "223px",
              }}
            >
              <Typography variant="body2" fontWeight={500} color="black">
                บิดา-มารดา
              </Typography>
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "transparent",
                padding: "10px 0",
                borderRadius: "20px",
                width: "223px",
              }}
            >
              <Typography variant="body2" fontWeight={500} color="black">
                บุตร
              </Typography>
            </Button>
          </Box>
          <Box
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="30px"
            width="100%"
            paddingLeft="220px"
          >
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked={false} />}
                label="ยินยอมให้เปิดเผยข้อมูล"
              />
            </FormGroup>
          </Box>
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
              สมัครสมาชิก
            </Typography>
          </Button>
        </BoxRegister>
        <Link href="/contact">
          <BoxContact>
            <Typography variant="body1">
              <i>มีปัญหาการเข้าใช้งานระบบ หรือสอบถามการใช้งาน</i>
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
              <Typography variant="body2" fontWeight={500}>
                ติดต่อเรา
              </Typography>
            </Button>
          </BoxContact>
        </Link>
        <Footer />
      </WrapperLayout>
    </Container>
  );
};

export default Register;

const Container = styled("main")`
  background-color: #ffdd24;
`;

const BoxRegister = styled("div")`
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

const BoxContact = styled("div")`
  cursor: pointer;
  background-color: #fff;
  border-radius: 20px;
  padding: 60px 90px;
  margin: 0 auto;
  margin-bottom: 100px;
  width: 950px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
