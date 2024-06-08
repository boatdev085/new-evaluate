import Header from "@/app/components/Header";
import WrapperLayout from "@/app/components/Layout";
import React from "react";
import SectionVideo from "./SectionVideo";
import SectionAcademic from "./SectionAcademic";
import SectionGraph from "./SectionGraph";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Header />
      <WrapperLayout sx={{ marginTop: "74px" }}>
        <SectionVideo />
        <SectionAcademic />
        <SectionGraph />
      </WrapperLayout>
    </main>
  );
};

export default Home;
