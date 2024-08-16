import { Box } from "@mui/material";
import React from "react";

type Props = {
  width?: string | number;
  height?: string | number;
  src?: string;
  title?: string;
};

const VideoSection = (props: Props) => {
  return (
    <iframe
      width={props.width}
      height={props.height}
      src={props.src}
      title={props.title}
      allow="accelerometer;"
    ></iframe>
  );
};

export default VideoSection;
