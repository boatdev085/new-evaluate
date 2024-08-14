import WrapperLayout from "@/components/Layout";
import React from "react";

import SectionAcademic from "./SectionAcademic";

import Footer from "@/components/Footer";
import Header from "./Header";
import SectionNameList from "./SectionNameList";
import SectionInfo from "./SectionInfo";
import SectionChart from "./SectionChart";

type Props = {};

const Home = (props: Props) => {
  return (
    <main style={{ background: "#8ACEFC" }}>
      <Header />
      <SectionNameList />
      <SectionAcademic />
      <WrapperLayout sx={{ margin: "0 auto", backgroundColor: "white" }}>
        <SectionInfo />
        <SectionChart title="แบบประเมินการเลี้ยงดูเชิงบวก" />
        <SectionChart title="แบบประเมินต้นทุนชีวิต" />
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default Home;
