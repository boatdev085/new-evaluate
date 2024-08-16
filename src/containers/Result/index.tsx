import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import WrapperLayout from "@/components/Layout";
import SectionChart from "./SectionChart";
import SectionResultList from "./SectionResultList";

type Props = {};

const Result = (props: Props) => {
  return (
    <main style={{ background: "#FAEC9E" }}>
      <WrapperLayout>
        <Header />
        <SectionChart
          title={
            <>
              ผลการประเมิน
              <br />
              แบบประเมินการเลี้ยงดูด้วยวินัยเชิงบวก
            </>
          }
        />
        <SectionResultList/>  
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default Result;
