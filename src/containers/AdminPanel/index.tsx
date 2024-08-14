import React from "react";
import Header from "./components/Header";
import Footer from "@/components/Footer";
import WrapperLayout from "@/components/Layout";
import SectionBoxData from "./components/SectionBoxData";
import SectionTable from "./components/SectionTable";

const AdminPanel = () => {
  return (
    <main>
      <Header />
      <WrapperLayout sx={{ margin: "0 auto", backgroundColor: "white" }}>
        <SectionBoxData />
        <SectionTable />
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default AdminPanel;
