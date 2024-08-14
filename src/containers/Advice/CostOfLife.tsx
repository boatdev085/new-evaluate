import WrapperLayout from "@/components/Layout";
import React from "react";
import AdviceInfo from "./components/AdviceInfo";
import { Box, Button, Typography } from "@mui/material";

type Props = {};

const CostOfLifeAdvice = (props: Props) => {
  return (
    <main style={{ background: "#F6A2FD", minHeight: "100vh" }}>
      <WrapperLayout>
        <AdviceInfo src="/static/profile/doctor2.png">
          <Typography>
            ต้นทุนชีวิตเป็นคุณลักษณะที่ดีที่ได้รับการเสริมสร้างมาตั้งแต่แรกเกิดจนโต
            ซึ่งมีความสำคัญกับน้องๆ ประกอบด้วย 5 พลัง คือ พลังตัวตน พลังครอบครัว
            พลังสร้างปัญญา พลังชุมชน และพลังเพื่อนและกิจกรรม การ
            ที่น้องๆได้สำรวจต้นทุนชีวิตของน้องๆเอง
            จะทำให้น้องๆรู้ว่าต้นทุนชีวิตของน้องๆข้อไหนแข็งแรง ข้อไหนอ่อนแอ
            เมื่อทราบแล้วเราทั้งชุมชน
            หรือพื้นที่ของเราก็จะมาช่วยกันสร้างกิจกรรมสร้างสรรค์ที่จะเพิ่มต้นทุนชีวิตในส่วนที่
            อ่อนแอของน้องๆ เพื่อให้น้องๆมีสุขภาวะที่ดีทั้งร่างกายและจิตใจ
            รวมทั้งสร้างปฏิสัมพันธ์ที่ดีต่อกันทั้งใน ครอบครัว ชุมชน โรงเรียน
            และเพื่อน ๆ ของเราด้วย
          </Typography>
          <Box textAlign={"center"} paddingBottom={"40px"}>
            <Button
            href="evaluation-form"
              variant="contained"
              sx={{
                marginTop: "23px",
                backgroundColor: "#8ACEFC",
                padding: "13px 66px",
                borderRadius: "20px",
              }}
            >
              <Typography variant="body2" fontWeight={500}>
                ยอมรับ
              </Typography>
            </Button>
          </Box>
        </AdviceInfo>
      </WrapperLayout>
    </main>
  );
};

export default CostOfLifeAdvice;
