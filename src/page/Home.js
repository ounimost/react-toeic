import React from "react";
import { Link } from "react-router-dom";
import image from "../img/word.png";
function Home() {
  return (
    <div>
      <header>
        <nav class="flex items-center bg-gray-800 p-3 flex-wrap">
          <h1 class="text-white">TOEIC学習アプリ</h1>
          <div
            class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
          >
            <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link
                to="about"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                このアプリについて
              </Link>
              <Link
                to="word"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                単語テスト
              </Link>
              <Link
                to="contact"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                お問合せ
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main class="p-20">
        <div class="w-60">
          <img src={image} class="items-center"></img>
          <div class="text-3xl text-center font-bold">単語テスト</div>
          <p class="text-center">Level 600</p>
          <p class="text-center">Level 700</p>
          <p class="text-center">Level 800</p>
        </div>
      </main>
      <footer class="bg-gray-800 p-3">
        <p class="text-white text-xs text-center">&copy;2022 OUNI STUDIO</p>
      </footer>
    </div>
  );
}

export default Home;
