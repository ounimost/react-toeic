import React from "react";
import { Link } from "react-router-dom";
import image from "../img/word.png";

function About() {
  return (
    <div>
      <header>
        <nav>
          <h1>TOEIC学習アプリ</h1>
          <div>
            <div>
              <Link to="about">このアプリについて</Link>
              <Link to="word">単語テスト</Link>
              <Link to="contact">お問合せ</Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div>
          <img src={image}></img>
          <div>単語テスト</div>
          <p>Level 600</p>
          <p>Level 700</p>
          <p>Level 800</p>
        </div>
      </main>
      <footer>
        <p>&copy;2022 OUNI STUDIO</p>
      </footer>
    </div>
  );
}
export default About;
