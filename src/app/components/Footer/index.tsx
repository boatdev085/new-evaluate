import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      padding="42px 16px"
      borderTop="1px solid rgb(0,0,0,0.5)"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Box marginBottom="40px" gap="42px" display="flex" alignItems="center">
        <Image
          src="/static/logo/logo-1.png"
          alt="logo"
          width={66}
          height={66}
        />
        <Image
          src="/static/logo/logo-2.png"
          alt="logo"
          width={66}
          height={66}
        />
        <Image
          src="/static/logo/logo-3.png"
          alt="logo"
          width={66}
          height={66}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ textAlign: "center", color: "rgb(0,0,0.0.8)" }}
      >
        © Photo, Inc. 2019. We love our users!
      </Typography>
    </Box>
  );
};

export default Footer;
