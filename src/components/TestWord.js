import React from "react";
import Data from "../data/words.json";

const TestWord = (props) => {
  const now = (props.part - 1) * 10 + props.count;

  const en = Data[now].en;
  var ja = Data[now].ja;
  if (!props.state.isAnswer) ja = "　";

  if (props.state.isResult) return null;

  return (
    <div className="m-10">
      <div className="m-10 text-5xl font-bold center">{en}</div>
      <hr></hr>
      <div className="m-10 text-4xl font-bold center">{ja}</div>
    </div>
  );
};

export default TestWord;
