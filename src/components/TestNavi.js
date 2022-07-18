import React from "react";
import TestNaviQuestion from "./TestNaviQuestion";
import TestNaviAnswer from "./TestNaviAnswer";
import TestNaviResult from "./TestNaviResult";
import HomeButton from "./HomeButton";

const TestNavi = ({
  count,
  setCount,
  state,
  setState,
  correct,
  setCorrect,
}) => {
  const handleOk = () => {
    setState({ isAnswer: true, isResult: false });
    setCorrect(correct + 1);
  };

  const handleNg = () => {
    setState({ isAnswer: true, isResult: false });
  };

  // 進む
  const handleNext = () => {
    if (count == 9) {
      setState({ isAnswer: false, isResult: true });
      return;
    }

    setCount(count + 1);
    setState({ isAnswer: false, isResult: false });
  };

  return (
    <div>
      <TestNaviQuestion handleOk={handleOk} handleNg={handleNg} state={state} />
      <TestNaviAnswer handleNext={handleNext} state={state} />
      <TestNaviResult state={state} correct={correct} />
      <HomeButton />
    </div>
  );
};

export default TestNavi;
