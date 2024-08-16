"use client";
import { Typography } from "@mui/material";
import React from "react";
import SectionContent from "./components/SectionContent";
import ChartDotCircle from "@/components/ChartDotCircle";

type Props = {};

const SectionEvaluationResult = (props: Props) => {
  return (
    <SectionContent title="ผลการประเมินของฉัน">
      {true ? (
        <ChartDotCircle/>
      ) : (
        <Typography>
          ยังไม่มีแบบประเมินที่จะแสดงผล
          คลิกที่แบบประเมินตามสิทธิของท่านเพื่อเริ่มทำการประเมิน
          หากท่านไม่สามารถเลือก แบบประเมินใดๆได้
          ให้ท่านทำการแก้ไขข้อมูลผู้ใช้งาน เพื่อทำการ และ เลือกสถานะการใช้งาน
          โดยเลือก 1 บิดา-มาราดา หรือ 2. บุตร
          เพื่อที่จะได้สิทธิในการเริ่มต้นแบบประเมินต่อไป
        </Typography>
      )}
    </SectionContent>
  );
};

export default SectionEvaluationResult;
