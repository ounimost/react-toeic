import React from "react";
import image from "../img/test2.png";
import image2 from "../img/test1.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main class="p-20 flex">
        <div class="w-60 m-5">
          <img src={image} class="items-center m-3" alt="単語テスト" />
          <p class="text-center">
            <Link to="/word/600">Level 600</Link>
          </p>
          <p class="text-center">
            <Link to="/word/700">Level 700</Link>
          </p>
          <p class="text-center">
            <Link to="/word/800">Level 800</Link>
          </p>
        </div>
        <div class="w-60 m-5">
          <img src={image2} class="items-center m-3" alt="出題文テスト" />
          <p class="text-center">
            <Link to="/sentence/1">Part.1</Link>
          </p>
          <p class="text-center">
            <Link to="/sentence/2">Part.2</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
