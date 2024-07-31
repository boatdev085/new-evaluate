import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

const WrapperLayout = ({ children, sx }: Props) => {
  return (
    <Box sx={sx} maxWidth="1280px" margin="0 auto">
      {children}
    </Box>
  );
};

export default WrapperLayout;
