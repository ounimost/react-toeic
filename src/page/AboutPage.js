import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeButton from "../components/HomeButton";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="p-10">
          <Title text="このサイトについて" />
          <p>
            TOEIC学習サイトは、OUNI
            Studioが制作したTOEICを学習するためのサイトです。
          </p>
          <p>現在、開発途中のため日々サイトが更新されます。</p>
          <SubTitle text="リンクについて" />
          <p>リンクフリーです。</p>
          <SubTitle text="サイトの運営について" />
          <p>OUNI STUDIOが運営しています。</p>
          <SubTitle text="サイトの情報" />
          <p>React/TailwindCSSでサイトを構築しています。</p>
          <HomeButton />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default AboutPage;
