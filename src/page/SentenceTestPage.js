import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import HomeButton from "../components/HomeButton";

const SentenceTestPage = () => {
  let params = useParams();

  return (
    <div>
      <Header />
      <main className="p-10 text-center ">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">
            出題文テスト:Part.{params.part}
          </h1>
        </div>
        <HomeButton />
      </main>
      <Footer />
    </div>
  );
};

export default SentenceTestPage;
