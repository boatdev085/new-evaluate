import WrapperLayout from "@/components/Layout";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "./components/Header";
import SectionVideoRecommend from "./components/SectionVideoRecommend";
import Footer from "@/components/Footer";
import CostOfLifeForm from "./components/CostOfLifeForm";

type Props = {};

const CostOfLifeEvaluation = (props: Props) => {
  return (
    <main>
      <Header
        title="ระบบประเมินการต้นทุนชีวิต"
        bgColor="#F6A2FD"
        image="/static/form/cartoon-cost-of-life.png"
      />
      <WrapperLayout sx={{ maxWidth: "900px" }}>
        <CostOfLifeForm />
      </WrapperLayout>
      <WrapperLayout>
        <SectionVideoRecommend />
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default CostOfLifeEvaluation;
