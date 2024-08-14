"use client";
import { Box, Stack, styled, Typography } from "@mui/material";
import React, { useId } from "react";

type Props = {
  title?: string;
  textLeast?: string;
  textMost?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PositiveParentingQuestion = React.forwardRef<HTMLInputElement, Props>(
  function PositiveParentingQuestion(props, ref) {
    const { title, textLeast, textMost, ...restProps } = props;
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
              px={4}
            >
              {Array.from({ length: 7 }).map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    id={`${id}-${index}`}
                    type="radio"
                    ref={ref}
                    {...restProps}
                    value={index + 1}
                  />
                  <AnswerBtn className="label-btn" htmlFor={`${id}-${index}`}>
                    {index + 1}
                  </AnswerBtn>
                </React.Fragment>
              ))}
            </Stack>
          </RadioWrapper>
          <Stack justifyContent={"space-between"} direction={"row"}>
            <Typography variant="body1" fontWeight={400} mt={3}>
              {props.textLeast}
            </Typography>
            <Typography variant="body1" fontWeight={400} mt={3}>
              {props.textMost}
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
  }
);

export default PositiveParentingQuestion;

const AnswerBtn = styled("label")`
  width: 90px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a835c6;
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
