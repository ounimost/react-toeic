import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>お問合せ</h1>
      <p>ここにコンタクトフォームを置く</p>
      <Link to="/">Homeに戻る</Link>
    </div>
  );
}

export default Contact;
