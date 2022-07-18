import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import TestWord from "../components/TestWord";
import { useState } from "react";
import TestTitle from "../components/TestTitle";
import TestNavi from "../components/TestNavi";

const WordTestPage = (props) => {
  let params = useParams();
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [state, setState] = useState({
    isAnswer: false,
    isResult: false,
  });

  return (
    <div>
      <Header />
      <main className="p-10 text-center ">
        <TestTitle
          title="単語テスト"
          part={params.part}
          now={count + 1}
          max={10}
        />
        <TestWord part={params.part} count={count} state={state} />
        <TestNavi
          count={count}
          setCount={setCount}
          state={state}
          setState={setState}
          correct={correct}
          setCorrect={setCorrect}
        />
      </main>
      <Footer />
    </div>
  );
};

export default WordTestPage;
