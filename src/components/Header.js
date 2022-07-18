import React from "react";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropdownMenu";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
          <h1 className="text-white">
            <Link to="/">TOEIC学習サイト</Link>
          </h1>
          <div
            className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
            id="navigation"
          >
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link
                to="/"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
              >
                ホーム
              </Link>
              <Link
                to="/about"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
              >
                このサイトについて
              </Link>
              <DropDownMenu
                title="単語テスト"
                links={[
                  { url: "/word/1", name: "Part.1" },
                  { url: "/word/2", name: "Part.2" },
                  { url: "/word/3", name: "Part.3" },
                ]}
              />
              <DropDownMenu
                title="出題文テスト"
                links={[
                  { url: "/sentence/1", name: "Part.1" },
                  { url: "/sentence/2", name: "Part.2" },
                ]}
              />
              <Link
                to="/contact"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
              >
                お問合せ
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
