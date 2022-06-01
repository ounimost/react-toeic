import React from "react";
import { Link } from "react-router-dom";
import image from "../img/word.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <main class="p-20">
        <div class="w-60">
          <img src={image} class="items-center"></img>
          <div class="text-3xl text-center font-bold">単語テスト</div>
          <p class="text-center">Level 600</p>
          <p class="text-center">Level 700</p>
          <p class="text-center">Level 800</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
