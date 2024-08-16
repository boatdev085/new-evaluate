import React from "react";
import Footer from "@/components/Footer";
import WrapperLayout from "@/components/Layout";
import Header from "../User/Header";
import SectionForm from "./components/SectionForm";

type Props = {};

const UserEdit = (props: Props) => {
  return (
    <main>
      <Header />
      <WrapperLayout>
        <SectionForm />
      </WrapperLayout>
      <Footer />
    </main>
  );
};

export default UserEdit;
