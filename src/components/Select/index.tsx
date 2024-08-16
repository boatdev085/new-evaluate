import React, { useId } from "react";
import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

type Props = {
  label?: string;
  options: { label: string; value: string }[];
  left?: boolean;
  placeholder?: string;
  bgBold?: boolean;
};

const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(
  { options, label, left, placeholder, bgBold, ...props },
  ref
) {
  console.log(props);
  const id = useId();
  return (
    <>
      <label htmlFor={id}>
        <Typography mb={2}>{label}</Typography>
      </label>
      <Autocomplete
        ref={ref}
        disablePortal
        options={options}
        fullWidth
        id={id}
        sx={{
          ".MuiAutocomplete-endAdornment": {
            display: "none",
          },
          ".MuiAutocomplete-inputRoot": {
            borderRadius: "25px",
            backgroundColor: bgBold ? "#FFDD24" : "#FAEC9E",
          },
          ".MuiInputBase-input": {
            textAlign: left ? "left" : "center",
          },
          ".MuiOutlinedInput-root": {
            paddingRight: "9px !important",
          },
        }}
        renderInput={(params) => (
          <TextField
            hiddenLabel
            {...params}
            hidden
            placeholder={placeholder || "เลือก"}
            {...props}
          />
        )}
        {...props}
      />
    </>
  );
});

export default Select;
