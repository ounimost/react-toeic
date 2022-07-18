import React from "react";
import { Link } from "react-router-dom";
import imgHome from "../img/home.png";

const HomeButton = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-center opacity-80 hover:opacity-100">
        <Link className="text-gray-500 hover:text-black p-2 m-3" to="/">
          <img src={imgHome} className="m-3 h-20" alt="Homeへ戻る" />
        </Link>
      </div>
    </div>
  );
};

export default HomeButton;
