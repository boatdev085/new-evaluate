"use client";
import { Avatar, Box, Button, Stack, styled, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import PositiveParentingQuestion from "./PositiveParentingQuestion";
import useStep from "../hooks/useStep";
import { POSITIVE_PARENTING_EVALUATION } from "../constant";

type Props = {};

type FormData = {
  step: number;
  title: string;
  questions: {
    id: number;
    title: string;
    textLeast: string;
    textMost: string;
  }[];
};

const PositiveParentingForm = (props: Props) => {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const { step, next, prev } = useStep();
  const { control, register, reset, getValues, watch } = useForm();
  const { fields } = useFieldArray({
    control,
    name: "positive_parenting_form",
  });

  console.log(watch("positive_parenting_form"));

  const handleNext = () => {
    next();
    ref1.current?.scrollIntoView();
  };

  const handlePrev = () => {
    prev();
    ref1.current?.scrollIntoView();
  };

  const handleSubmit = () => {
    // TODO : ส่งข้อมูล

    handleNext();
  };

  const renderQuestion = (data: FormData) => {
    return (
      <>
        <Typography variant="h5" mb={10} textAlign={"center"}>
          {data.title}
        </Typography>
        <Stack spacing={10}>
          {data.questions.map(({ id, ...item }, index) => (
            <PositiveParentingQuestion
              key={id}
              {...item}
              title={`${id}. ${item.title}`}
              {...register(`positive_parenting_form.${id - 1}`)}
            />
          ))}
        </Stack>
      </>
    );
  };

  return (
    <Container ref={ref1}>
      <Box display={step === 0 ? "block" : "none"}>
        {renderQuestion(POSITIVE_PARENTING_EVALUATION[0])}
        <Stack direction={"row"} justifyContent={"center"} spacing={2} mt={10}>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FBAE18",
                padding: "13px 66px",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => handleNext()}
            >
              ไปยังหัวข้อถัดไป {">>"}
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box display={step === 1 ? "block" : "none"}>
        {renderQuestion(POSITIVE_PARENTING_EVALUATION[1])}
        <Stack direction={"row"} justifyContent={"center"} spacing={2} mt={10}>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FBAE18",
                padding: "13px 66px",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => handlePrev()}
            >
              {"<<"} ย้อนกลับ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FBAE18",
                padding: "13px 66px",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => handleNext()}
            >
              ไปยังหัวข้อถัดไป {">>"}
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box display={step === 2 ? "block" : "none"}>
        {renderQuestion(POSITIVE_PARENTING_EVALUATION[2])}
        <Stack direction={"row"} justifyContent={"center"} spacing={2} mt={10}>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FBAE18",
                padding: "13px 66px",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => handlePrev()}
            >
              {"<<"} ย้อนกลับ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FBAE18",
                padding: "13px 66px",
                borderRadius: "20px",
                maxWidth: "250px",
              }}
              onClick={() => handleSubmit()}
            >
              บันทึกข้อมูล {">>"}
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box display={step === 3 ? "block" : "none"} textAlign={"center"} py={10}>
        <Avatar
          src="/static/profile/doctor1.png"
          sx={{
            width: 225,
            height: 225,
            margin: "0 auto",
            marginBottom: "40px",
          }}
        />
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

export default PositiveParentingForm;

const Container = styled("div")`
  padding: 60px 0px;
  margin-bottom: 60px;
`;
