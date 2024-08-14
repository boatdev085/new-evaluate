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
};

const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(
  { options, label, ...props },
  ref
) {
  console.log(props)
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
            backgroundColor: "#FAEC9E",
          },
          ".MuiInputBase-input": {
            textAlign: "center",
          },
          ".MuiOutlinedInput-root": {
            paddingRight: "9px !important",
          },
        }}
        renderInput={(params) => (
          <TextField hiddenLabel {...params} hidden placeholder="เลือก"  {...props}/>
        )}
        {...props}
      />
    </>
  );
});

export default Select;
