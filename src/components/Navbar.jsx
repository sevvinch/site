import React, { useState, useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";
import Logo from "./../../public/assets/logo.svg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="w-full bg-[var(--header-bg-color)] border-b-2 border-[var(--border-color)]">
      <header className="container mx-auto px-4 ">
        <div className="flex justify-between items-center">
          <img src={Logo} alt="vention logosss" />
          <ul className="flex justify-between items-center gap-20 ">
            <li className="px-3 py-5 border-l-2 border-[var(--border-color)]">
              <a href="" className="font-semibold text-[17px] hover:text-red-900">
                What we do
              </a>
            </li>
            <li className="px-3 py-5">
              <a href="" className="font-semibold text-[17px] hover:text-red-900">
                Portfolio
              </a>
            </li>
            <li className="px-3 py-5">
              <a href="" className="font-semibold text-[17px] hover:text-red-900">
                Insights
              </a>
            </li>
            <li>
              <a href="" className="font-semibold text-[17px] hover:text-red-900">
                About us
              </a>
            </li>
            <button className="py-5 px-6 bg-[var(--button-bg-color)] hover:bg-[var(--button-hover-bg-color)] hover:text-[var(--button-hover-text-color)]">
              <a href="" className="bg-transparent">Contact us</a>
            </button>
            <li className="py-5">
              <a href="">
                <TfiWorld className="w-[25px] h-[25px] hover:text-red-900" />
              </a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-200 dark:bg-gray-800 rounded">
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
