"use client";
import { Avatar, Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useStep from "@/containers/EvaluationForm/hooks/useStep";
import CostOfLifeQuestion from "@/containers/EvaluationForm/components/CostOfLifeQuestion";
import { COST_OF_LIFE_EVALUATION } from "@/containers/EvaluationForm/constant";
import Select from "@/components/Select";
import DatePickers from "@/components/DatePicker";

type Props = {};

type FormData = {
  id: number;
  title: string;
};

const SectionForm = (props: Props) => {
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
        <Stack spacing={4} mb={10} maxWidth={"800px"} mx={"auto"}>
          <Box>
            <Select
              label={"เปลี่ยนรหัสผ่าน"}
              options={[
                { label: "เลือก", value: "เลือก" },
                { label: "ไม่เลือก", value: "ไม่เลือก" },
              ]}
              {...register("password")}
              left
              placeholder="กำหนดรหัสผ่านใหม่ รหัสผ่านต้องมีไม่น้อยกว่า 8 อักขระ สามารถใส่อักขระพิเศษได้"
              bgBold
            />
          </Box>
          <Box>
            <DatePickers
              disabled
              label="วัน-เดือน-ปีเกิด"
              {...register("age")}
              left
              bgBold
            />
          </Box>
          <Box>
            <Select
              label="เพศ"
              options={[
                { label: "ชาย", value: "ชาย" },
                { label: "หญิง", value: "หญิง" },
                { label: "LGBTQ", value: "LGBTQ" },
              ]}
              {...register("gender")}
              left
              bgBold
            />
          </Box>
          <Box>
            <Select
              label="สถานภาพทางครอบครัว"
              options={[
                { label: "โสด", value: "โสด" },
                { label: "สมรส", value: "สมรส" },
                { label: "หม้าย", value: "หม้าย" },
                { label: "หย่าร้าง", value: "หย่าร้าง" },
                { label: "แยกกันอยู่", value: "แยกกันอยู่" },
              ]}
              {...register("family_status")}
              left
              bgBold
            />
          </Box>
          <Box>
            <Select
              label="ระดับการศึกษา"
              options={[
                { label: "ประถมศึกษา", value: "ประถมศึกษา" },
                { label: "มัธยมศึกษาตอนต้น", value: "มัธยมศึกษาตอนต้น" },
                { label: "มัธยมศึกษาตอนปลาย", value: "มัธยมศึกษาตอนปลาย" },
                { label: "ปวช", value: "ปวช" },
              ]}
              {...register("education")}
              left
              bgBold
            />
          </Box>
          <Box>
            <Select
              label="ภูมิลำเนา"
              options={[
                { label: "เลือก", value: "เลือก" },
                { label: "ไม่เลือก", value: "ไม่เลือก" },
              ]}
              {...register("religion")}
              left
              bgBold
            />
          </Box>
          <Box>
            <Select
              label="เข้าใช้งานในฐานะ"
              options={[
                {
                  label: "บิดา มาราด / ผู้ปกครอง",
                  value: "บิดา มาราด / ผู้ปกครอง",
                },
                { label: "บุตร", value: "บุตร" },
              ]}
              {...register("role")}
              left
              bgBold
            />
          </Box>
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

export default SectionForm;

const Container = styled("div")`
  padding: 60px 0px;
  margin-bottom: 60px;
`;
