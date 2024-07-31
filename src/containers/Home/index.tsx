import Header from "@/components/Header";
import WrapperLayout from "@/components/Layout";
import React from "react";
import SectionVideo from "./SectionVideo";
import SectionAcademic from "./SectionAcademic";
import SectionGraph from "./SectionGraph";
import Footer from "@/components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Header />
      <WrapperLayout sx={{ marginTop: "74px" }}>
        <SectionVideo />
        <SectionAcademic />
        <SectionGraph />
        <Footer />
      </WrapperLayout>
    </main>
  );
};

export default Home;
