"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React, { useId } from "react";

type Props = {
  title?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CostOfLifeQuestion = React.forwardRef<HTMLInputElement, Props>(
  function CostOfLifeQuestion(props, ref) {
    const { title, ...restProps } = props;
    const id = useId();
    return (
      <Box>
        <Typography variant="h6" fontWeight={400} mb={3}>
          {props.title}
        </Typography>
        <Box mx={"auto"} maxWidth={"780px"}>
          <RadioWrapper>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              px={4}
            >
              <Image
                src="/static/form/good.png"
                alt="good"
                width={65}
                height={65}
              />
              {[
                { label: "เป็นประจำ", bg: "rgb(254, 126, 107,1)" },
                { label: "บ่อยครั้ง", bg: "rgb(254, 126, 10,0.75)" },
                { label: "บ่อยครั้ง", bg: "rgb(254, 126, 10,0.50)" },
                { label: "ไม่เคย", bg: "rgb(254, 126, 10,0.35)" },
              ].map((item, index) => (
                <React.Fragment key={index}>
                  <input
                    id={`${id}-${index}`}
                    type="radio"
                    ref={ref}
                    {...restProps}
                    value={index + 1}
                  />
                  <AnswerBtn
                    className="label-btn"
                    htmlFor={`${id}-${index}`}
                    sx={{ bgcolor: item.bg }}
                  >
                    {item.label}
                  </AnswerBtn>
                </React.Fragment>
              ))}
              <Image
                src="/static/form/bad.png"
                alt="bad"
                width={65}
                height={65}
              />
            </Stack>
          </RadioWrapper>
        </Box>
      </Box>
    );
  }
);

export default CostOfLifeQuestion;

const AnswerBtn = styled("label")`
  width: 130px;
  height: 55px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid inherit;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #a835c6;
    color: #fff;
  }
`;

const RadioWrapper = styled("div")`
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + .label-btn {
    background-color: #a835c6;
    color: #fff;
  }
`;
