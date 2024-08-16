import React from "react";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

type Props = {
    label?:string
    disabled?:boolean
};

const DatePickers = ({label,...props}: Props) => {
  return (
    <>
   <Typography mb={2}>{label}</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker {...props} sx={{
        ".MuiOutlinedInput-root":{
            borderRadius:"25px"
        },
        ".MuiInputBase-root":{
            background:"#FAEC9E"
        },
        width:"100%",
        "input":{
            textAlign:"center"
        }
      }}/>
    </LocalizationProvider>
    </>
  );
};

export default DatePickers;
