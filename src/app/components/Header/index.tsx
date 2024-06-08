"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ModalLogin from "../Modal/ModalLogin";

type Props = {};

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        background:
          "url(/static/bg/bg-header.png) no-repeat center center fixed",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ModalLogin open={open} onClose={() => setOpen(!open)} />
      <Typography
        variant="h1"
        sx={{ textAlign: "center", lineHeight: "150px" }}
      >
        ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)
        <br />
        และ
        <br />
        การประเมินต้นทุนชีวิต
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "50px",
          backgroundColor: "#18A0FB",
          padding: "16px 48px",
        }}
      >
        <Typography variant="body2" onClick={() => setOpen(!open)}>
          Get Started
        </Typography>
      </Button>
    </Box>
  );
};

export default Header;
