import React from "react";

const TestTitle = (props) => {
  const now = props.now + (props.part - 1) * 10;
  const max = props.part * 10;

  return (
    <div className="mb-10">
      <h2 className="font-bold text-center">
        {props.title}　No.{now}/{max}
      </h2>
    </div>
  );
};

export default TestTitle;
