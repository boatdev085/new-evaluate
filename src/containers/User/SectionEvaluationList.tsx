import {  Typography } from "@mui/material";
import React from "react";
import SectionContent from "./components/SectionContent";
import Table from "./components/Table";

type Props = {};

const SectionEvaluationList = (props: Props) => {
  return (
    <SectionContent title="รายการแบบการประเมินของฉัน">
      {/* <Typography>ยังไม่มีข้อมูลแบบประเมิน</Typography> */}
      {true ? <Table /> : <Typography>ยังไม่มีข้อมูลแบบประเมิน</Typography>}
    </SectionContent>
  );
};

export default SectionEvaluationList;
