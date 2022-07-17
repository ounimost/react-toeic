import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div class="p-10">
          <h1>このアプリについて</h1>
          <p>ここに紹介文を置く</p>
          <Link to="/">Homeに戻る</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default AboutPage;
