import React from "react";
import imgMaru from "../img/maru.png";
import imgBatsu from "../img/batsu.png";

const TestNaviQuestion = ({ handleOk, handleNg, state }) => {
  if (state.isAnswer || state.isResult) return null;

  return (
    <div className="m-5 flex place-content-center">
      <button
        className="text-black opacity-50 hover:opacity-100 text-center p-2 m-3"
        onClick={handleNg}
      >
        <img src={imgBatsu} className="m-3 h-16" alt="知らない" />
        知らない
      </button>
      <button
        className="text-black opacity-50 hover:opacity-100 text-center p-2 m-3"
        onClick={handleOk}
      >
        <img src={imgMaru} className="m-3 h-16 " alt="知ってる" />
        知ってる
      </button>
    </div>
  );
};

export default TestNaviQuestion;
