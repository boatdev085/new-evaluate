"use client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";
type Props = {
  open: boolean;
  onClose: () => void;
};

const ModalLogin = ({ open, onClose }: Props) => {
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
        >
          <Box>
            <Typography variant="h1">เข้าสู่ระบบ</Typography>
            <Typography variant="body2">
              ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)และการประเมินต้นทุนชีวิต
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#DF590D",
              padding: "16px 48px",
              width: "662px",
              color: "black",
            }}
          >
            เข้าสู่ระบบด้วยอีเมล์​
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#1595DD",
              padding: "16px 48px",
              width: "662px",
              color: "black",
            }}
            onClick={() => signIn("google")}
          >
            เข้าสู่ระบบด้วยบัญชี Google
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#3E63E8",
              padding: "16px 48px",
              width: "662px",
              color: "black",
            }}
            onClick={() => signIn("facebook")}
          >
            เข้าสู่ระบบด้วยบัญชี Facebook
          </Button>

          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#0ECF0A",
              padding: "16px 48px",
              width: "662px",
              color: "black",
            }}
            onClick={() => signIn("line")}
          >
            เข้าสู่ระบบด้วยบัญชี Line
          </Button>
          <Typography variant="body2">หรือ</Typography>
          <Button variant="text" color="inherit">
            ยังไม่มีบัญชีผู้ใช้งาน คลิก เพื่อสมัครบัญชีผู้ใช้งาน
          </Button>
        </Box>
        <Box
          bgcolor="white"
          padding="20px 0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="88px"
          borderRadius="12px"
        >
          มีปัญหาการเข้าใช้งานระบบ หรือสอบถามการใช้งาน{" "}
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#18A0FB",
              padding: "16px 48px",
            }}
          >
            ติดต่อเรา
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
