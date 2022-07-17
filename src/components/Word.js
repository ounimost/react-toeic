import React from "react";
import Data from "../data/words.json";

const Word = (props) => {
  //window.alert(props.count);

  // rank
  let rank = 0;
  switch (props.rank) {
    case "600":
      rank = 0;
      break;
    case "700":
      rank = 1;
      break;
    case "800":
      rank = 2;
      break;
    default:
      window.alert(props.part);
      break;
  }

  let text = "終了";
  if (Data[rank].Words.length <= props.count) {
    text = "終了";
  } else if (props.isQuestion) {
    text = Data[rank].Words[props.count].ja;
  } else {
    text = Data[rank].Words[props.count].en;
  }

  return <div class="text-5xl font-bold">{text}</div>;
};

export default Word;
