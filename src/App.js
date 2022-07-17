import { Routes, Route, BrowserRouter } from "react-router-dom";
import WordTestPage from "./page/WordTestPage";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";
import SentenceTestPage from "./page/SentenceTestPage";

function App() {
  return (
    <BrowserRouter basename="/toeic-learning/">
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/word"} element={<WordTestPage />}>
          <Route path=":part" element={<WordTestPage />} />
        </Route>
        <Route path={"/sentence"} element={<SentenceTestPage />}>
          <Route path=":part" element={<SentenceTestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
