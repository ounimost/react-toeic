import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SentenceTestPage = () => {
  let params = useParams();

  return (
    <div>
      <Header />
      <main class="p-10 text-center ">
        <div class="mb-10">
          <h1 class="text-3xl font-bold">出題文テスト:Part.{params.part}</h1>
        </div>
        <div class="m-5">
          <Link
            class="text-gray-500 hover:text-black text-center p-2 m-3"
            to="/"
          >
            Homeに戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SentenceTestPage;
