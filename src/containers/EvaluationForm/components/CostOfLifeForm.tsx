"use client";
import { Avatar, Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import PositiveParentingQuestion from "./PositiveParentingQuestion";
import useStep from "../hooks/useStep";
import { COST_OF_LIFE_EVALUATION, POSITIVE_PARENTING_EVALUATION } from "../constant";
import CostOfLifeQuestion from "./CostOfLifeQuestion";
import Select from "@/components/Select";
import DatePickers from "@/components/DatePicker";

type Props = {};

type FormData = {
  id: number;
  title: string;
};

const CostOfLifeForm = (props: Props) => {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const { step, next, prev } = useStep();
  const { control, register, reset, getValues, watch } = useForm();
  const { fields } = useFieldArray({
    control,
    name: "cost_of_life_form",
  });

  console.log(watch("cost_of_life_form"));

  const handleNext = () => {
    next();
    ref1.current?.scrollIntoView();
  };

  const handleSubmit = () => {
    // TODO : ส่งข้อมูล

    handleNext();
  };

  const renderQuestion = (data: FormData[]) => {
    return (
      <>
        <Typography variant="h5" mb={10} textAlign={"center"}>
          ระบบประเมินต้นทุนชีวิต
        </Typography>
        <Stack spacing={4} mb={10} maxWidth={"500px"} mx={"auto"}>
        <Box>
            <DatePickers disabled label="อายุ ณ วันที่ทำแบบประเมิน ***อัตโนมัต" {...register("age")}/>  
          </Box>
          <Box>
            <Select
              label={"ชื่อโรงเรียน / สถาบันการศึกษา"}
              options={[
                { label: "เลือก", value: "เลือก" },
                { label: "ไม่เลือก", value: "ไม่เลือก" },
              ]}
              {...register("educational_institution")}
            />
          </Box>
          <Box>
            <Select
              label="สถานภาพของบิดามารดา"
              options={[
                { label: "เลือก", value: "เลือก" },
                { label: "ไม่เลือก", value: "ไม่เลือก" },
              ]}
              {...register("parent")}
            />
          </Box>
          <Box>
            <Select
              label="เวลาส่วนใหญ่ใน 1 เดือน น้องพักอาศัยอยู่กับใคร"
              options={[
                { label: "เลือก", value: "เลือก" },
                { label: "ไม่เลือก", value: "ไม่เลือก" },
              ]}
              {...register("live_with")}
            />
          </Box>
          <Box>
            <Select
              label="ปัจจุบันอาศัยอยู่"
              options={[
                { label: "เลือก", value: "เลือก" },
                { label: "ไม่เลือก", value: "ไม่เลือก" },
              ]}
              {...register("live_now")}
            />
          </Box>
        </Stack>
        <Stack spacing={10}>
          {data.map(({ id, ...item }, index) => (
            <CostOfLifeQuestion
              key={id}
              {...item}
              title={`${id}. ${item.title}`}
              {...register(`cost_of_life_form.${id - 1}`)}
            />
          ))}
        </Stack>
      </>
    );
  };

  return (
    <Container ref={ref1}>
      <Box display={step === 0 ? "block" : "none"}>
        {renderQuestion(COST_OF_LIFE_EVALUATION)}
        <Stack direction={"row"} justifyContent={"center"} spacing={2} mt={10}>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#18A0FB",
                padding: "13px 66px",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => handleSubmit()}
            >
              บันทึกแบบประเมิน
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box display={step === 1 ? "block" : "none"} textAlign={"center"} py={10}>
        {/* <Avatar
          src="/static/profile/doctor1.png"
          sx={{
            width: 225,
            height: 225,
            margin: "0 auto",
            marginBottom: "40px",
          }}
        /> */}
        <Typography variant="h5" mb={10}>
          แบบประเมินของท่านถูกบันทึกแล้ว
        </Typography>
        <Button
          href="/user"
          variant="contained"
          sx={{
            backgroundColor: "#8ACEFC",
            padding: "13px 66px",
            borderRadius: "20px",
            maxWidth: "250px",
          }}
        >
          กลับหน้าหลัก
        </Button>
      </Box>
    </Container>
  );
};

export default CostOfLifeForm;

const Container = styled("div")`
  padding: 60px 0px;
  margin-bottom: 60px;
`;
