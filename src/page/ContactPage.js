import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import Title from "../components/Title";

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="p-10">
          <Title text="お問合せ" />
          <p>ここにコンタクトフォームを置きます。</p>
          <HomeButton />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
