import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div ref={dropdownRef} className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-white"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {title}
        </button>

        {isOpen && (
          <div className="absolute right-2 w-26 bg-gray-800 p-4 z-50 shadow-lg text-gray-400 hover:text-white">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;
