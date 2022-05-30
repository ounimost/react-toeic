import "./App.css";
import About from "./page/About";
import Word from "./page/Word";
import Contact from "./page/Contact";
import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/word" element={<Word />} />
      </Routes>
    </div>
  );
}

export default App;
