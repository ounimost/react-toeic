import React from "react";

const TestTitle = (props) => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold">
        {props.title} {props.part}
      </h1>
      <div>
        {props.now}/{props.max}
      </div>
    </div>
  );
};

export default TestTitle;
