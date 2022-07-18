import React from "react";
import imgFinish from "../img/finish.png";

const TestNaviResult = ({ state, correct }) => {
  if (!state.isResult) return null;

  return (
    <>
      <div className="flex justify-center">
        <img src={imgFinish} className="m-3 h-24" alt="完了" />
      </div>
      <div className="text-5xl font-bold ">{correct}/10 点</div>
    </>
  );
};

export default TestNaviResult;
