import { Box, SxProps, Theme } from "@mui/material";
import React from "react";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

const WrapperLayout = ({ children, sx }: Props) => {
  return (
    <Box sx={sx} maxWidth="1280px" margin="0 auto">
      {children}
      <Footer />
    </Box>
  );
};

export default WrapperLayout;
