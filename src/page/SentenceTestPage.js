import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { useState } from "react";
import TestTitle from "../components/TestTitle";
import TestNavi from "../components/TestNavi";
import TestSentence from "../components/TestSentence";

const SentenceTestPage = () => {
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
          title="出題文を覚えよう"
          part={params.part}
          now={count + 1}
          max={10}
        />
        <TestSentence part={params.part} count={count} state={state} />
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

export default SentenceTestPage;
