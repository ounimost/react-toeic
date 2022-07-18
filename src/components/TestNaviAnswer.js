import React from "react";
import imgArrow from "../img/arrow_right.png";

const TestNaviAnswer = ({ handleNext, state }) => {
  if (!state.isAnswer || state.isResult) return null;

  return (
    <>
      <button
        className="text-black opacity-50 hover:opacity-100 text-center p-2 m-3"
        onClick={handleNext}
      >
        <img src={imgArrow} className="m-3 h-12" alt="つぎへ" />
        つぎへ
      </button>
    </>
  );
};

export default TestNaviAnswer;
