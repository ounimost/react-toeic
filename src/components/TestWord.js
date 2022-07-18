import React from "react";
import Data from "../data/words.json";

const TestWord = (props) => {
  const part = props.part - 1;
  const count = props.count;
  //window.alert(props.part);

  const en = Data[part].Words[count].en;
  const ja = Data[part].Words[count].ja;

  if (props.state.isResult) return null;

  return (
    <div className="flex justify-center m-20">
      {props.state.isAnswer ? (
        <div className="h-20 conent-center">
          <div className="text-3xl font-bold">{en}</div>
          <div className="text-5xl font-bold">{ja}</div>
        </div>
      ) : (
        <div className="h-20 text-7xl font-bold leading-none">{en}</div>
      )}
    </div>
  );
};

export default TestWord;
