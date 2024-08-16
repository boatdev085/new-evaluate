"use client";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ModalEdit = ({ open, onClose }: Props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        width="90%"
        height="100%"
        margin="0 auto"
        padding="20px 0"
        display="flex"
        gap="70px"
        flexDirection="column"
      >
        <Box
          flex="1"
          bgcolor="white"
          padding="20px 0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          borderRadius="12px"
          gap="20px"
          sx={{ backgroundColor: "#FFDD24" }}
        >
          <Box>
            <Typography variant="h5">นายชยธร มายอด</Typography>
          </Box>
          <Box>
            <FormControl
              sx={{
                m: 1,
                minWidth: 120,
                backgroundColor: "#D9D9D9",
                color: "black",
                borderRadius: "20px",
                marginTop: "60px",
                width: "662px",
              }}
            >
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
                label=" General User"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#1595DD",
              padding: "16px 20px",
              borderRadius: "20px",
              color: "black",
              marginTop: "60px",
              width: "216px",
            }}
          >
            <Typography variant="body1" color="white">
              บันทึกการแก้ไขสิทธิ
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#1595DD",
              padding: "16px 20px",
              borderRadius: "20px",
              color: "black",
              marginTop: "17px",
              width: "216px",
            }}
          >
            <Typography variant="body1" color="white">
              ลบผู้ใช้งาน
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
