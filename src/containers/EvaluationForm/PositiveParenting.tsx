import WrapperLayout from "@/components/Layout";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "./components/Header";
import PositiveParentingForm from "./components/PositiveParentingForm";
import SectionVideoRecommend from "./components/SectionVideoRecommend";
import Footer from "@/components/Footer";

type Props = {};

const PositiveParentingEvaluation = (props: Props) => {
  return (
    <main>
      <Header
        title="ระบบประเมินการเลี้ยงดูเชิงบวก (PPSS)"
        bgColor="#8ACEFC"
        image="/static/form/cartoon-positive-parenting.png"
      />
      <WrapperLayout sx={{ maxWidth: "900px" }}>
        <PositiveParentingForm />
      </WrapperLayout>
      <WrapperLayout>
        <SectionVideoRecommend />
      </WrapperLayout>
      <Footer/>
    </main>
  );
};

export default PositiveParentingEvaluation;
