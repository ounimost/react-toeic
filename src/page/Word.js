import React from "react";
import { Link } from "react-router-dom";

function Word() {
  return (
    <div>
      <h1>単語テスト</h1>
      <p>ここに問題を置く</p>
      <Link to="/">Homeに戻る</Link>
    </div>
  );
}

export default Word;
