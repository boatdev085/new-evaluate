"use client";

import { createTheme } from "@mui/material/styles";
import { Kanit } from "next/font/google";

const roboto = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
