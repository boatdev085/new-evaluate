import React from "react";
import Header from "./components/Header";
import Footer from "@/components/Footer";
import WrapperLayout from "@/components/Layout";
import SectionBoxData from "./components/SectionBoxData";
import SectionChart from "./components/SectionChart";
import SectionTwoChart from "./components/SectionTwoChart";
import ChartDotCircle from "@/components/ChartDotCircle";
import SectionFooter from "./components/SectionFooter";

const Admin = () => {
  return (
    <main>
      <Header />
      <WrapperLayout sx={{ margin: "0 auto", backgroundColor: "white" }}>
        <SectionBoxData title="สถิติแบบประเมินการเลี้ยงดูเชิงบวก ** ภาพรวมสถานการณ์" />
        <SectionChart />
        <SectionBoxData />
        <SectionTwoChart />
        <ChartDotCircle />
        <SectionFooter />
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default Admin;
