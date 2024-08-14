import React from "react";
import Header from "./Header";
import SectionEvaluation from "./SectionEvaluation";
import SectionEvaluationResult from "./SectionEvaluationResult";
import SectionEvaluationList from "./SectionEvaluationList";
import Footer from "@/components/Footer";
import WrapperLayout from "@/components/Layout";
import SectionVideoRecommend from "./SectionVideoRecommend";

type Props = {};

const User = (props: Props) => {
  return (
    <main>
      <Header />
      <WrapperLayout>
        <SectionEvaluation />
        <SectionEvaluationResult />
        <SectionEvaluationList />
        <SectionVideoRecommend />
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default User;
