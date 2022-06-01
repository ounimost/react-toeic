import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Word() {
  return (
    <div>
      <Header />
      <main>
        <div class="p-10">
          <h1>単語テスト</h1>
          <p>ここに問題を置く</p>
          <Link to="/">Homeに戻る</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Word;
