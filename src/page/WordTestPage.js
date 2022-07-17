import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Word from "../components/Word";
import { useState } from "react";

const WordTestPage = (props) => {
  let params = useParams();
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <main class="p-10 text-center ">
        <div class="mb-10">
          <h1 class="text-3xl font-bold">単語テスト：{params.part}点</h1>
        </div>
        <Word
          rank={params.part}
          count={Math.trunc(count / 2)}
          isQuestion={count % 2}
        />
        <div class="m-5 flex place-content-center">
          <button
            class="text-gray-500 hover:text-black text-center p-2 m-3"
            onClick={() => setCount(count - 1)}
          >
            もどる
          </button>
          <button
            class="text-gray-500 hover:text-black  text-center p-2 m-3"
            onClick={() => setCount(count + 1)}
          >
            すすむ
          </button>
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

export default WordTestPage;
