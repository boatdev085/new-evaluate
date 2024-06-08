import { Box } from "@mui/material";
import React from "react";

type Props = {};

const SectionVideo = (props: Props) => {
  return (
    <Box padding="0 220px" height="680px">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
        title="YouTube video player"
        allow="accelerometer;"
      ></iframe>
    </Box>
  );
};

export default SectionVideo;
