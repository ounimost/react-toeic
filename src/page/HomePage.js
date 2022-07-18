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
      <main className="flex flex-wrap p-5">
        <div className="sm:min-w-full md:min-w-0 p-5">
          <img src={image} className="items-center p-3" alt="単語テスト" />
          <ul className="p-3">
            <li className="opacity-50 hover:opacity-100">
              <Link to="/word/1">Part.1</Link>
            </li>
            <li className="opacity-50 hover:opacity-100">
              <Link to="/word/2">Part.2</Link>
            </li>
            <li className="opacity-50 hover:opacity-100">
              <Link to="/word/3">Part.3</Link>
            </li>
          </ul>
        </div>
        <div className="sm:min-w-full md:min-w-0 p-5">
          <img src={image2} className="items-center p-3" alt="出題文テスト" />
          <ul className="p-3">
            <li className="opacity-50 hover:opacity-100">
              <Link to="/sentence/1">Part.1</Link>
            </li>
            <li className="opacity-50 hover:opacity-100">
              <Link to="/sentence/2">Part.2</Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
