import WrapperLayout from "@/components/Layout";
import { Button, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <WrapperLayout>
        <Image
          src="/static/login/logo.png"
          width={160}
          height={220}
          alt="logo"
        />
        <Typography variant="h3">
          ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)
          <br />
          และการประเมินต้นทุนชีวิต
        </Typography>
        <Typography variant="body1" fontWeight={500} sx={{ marginTop: "10px" }}>
          ประกอบด้วย 5 พลัง คือ พลังตัวตน พลังครอบครัว
          <br />
          พลังสร้างปัญญา พลังชุมชน และพลังเพื่อนและกิจกรรม
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "23px",
            backgroundColor: "#8ACEFC",
            padding: "13px 66px",
            borderRadius: "20px",
          }}
        >
          <Typography variant="body2" fontWeight={500} color="black">
            เริ่มต้นแบบสอบถาม
          </Typography>
        </Button>
      </WrapperLayout>
      <Image
        className="ambusder"
        src="/static/login/ambusder.png"
        width={650}
        height={720}
        alt="ambusder"
      />
    </Container>
  );
};

export default Header;

const Container = styled("div")`
  position: relative;
  padding: 10px 0 220px 0;
  .ambusder {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
