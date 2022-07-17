import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div class="p-10">
          <h1>お問合せ</h1>
          <p>ここにコンタクトフォームを置く</p>
          <Link to="/">Homeに戻る</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
