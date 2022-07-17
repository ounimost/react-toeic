import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav class="flex items-center bg-gray-800 p-3 flex-wrap">
          <h1 class="text-white">
            <Link to="/">TOEIC学習アプリ</Link>
          </h1>
          <div
            class="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
          >
            <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link
                to="/about"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
              >
                このアプリについて
              </Link>
              <Link
                to="/word"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
              >
                単語テスト
              </Link>
              <Link
                to="/contact"
                class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
              >
                お問合せ
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
