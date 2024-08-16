import React from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

type Props = {
  label?: string;
  disabled?: boolean;
  left?: boolean;
  bgBold?: boolean;
};

const DatePickers = ({ label, left, bgBold, ...props }: Props) => {
  return (
    <>
      <Typography mb={2}>{label}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          {...props}
          sx={{
            ".MuiOutlinedInput-root": {
              borderRadius: "25px",
            },
            ".MuiInputBase-root": {
              backgroundColor: bgBold ? "#FFDD24" : "#FAEC9E",
            },
            width: "100%",
            input: {
              textAlign: left ? "left" : "center",
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatePickers;
