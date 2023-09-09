import React, { useState } from 'react';
import logo from '../Sprintlogo.png';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Portfolio from './Portfolio';


const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
        <div>
    <header>
        <nav className="space-grotesk bg-black py-4 border-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-12 w-60 my-6" alt="Flowbite Logo" />
            </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center mx-4 p-2 w-10 h-10 justify-center text-sm text-indigo-500 rounded-lg md:hidden  focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? '' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="space-grotesk block hover:text-indigo-500 py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
                </li>
                  <li>
              <a
                href="#services"
                className="space-grotesk block hover:text-indigo-500 py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Services
              </a>
                </li>
                <li>
              <a
                href="#about"
                className="space-grotesk block hover:text-indigo-500 py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                About
              </a>
                </li>
                <li>
              <a
                href="#portfolio"
                className="space-grotesk block hover:text-indigo-500 py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Portfolio
              </a>
                </li>
                <li>
              <a
                href="#"
                className="space-grotesk block hover:text-indigo-500 py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Contact
              </a>
                </li>
              <li>
              <a
                href="#"
                className="space-grotesk block hover:text-indigo-500 py-2 pl-3 pr-4 text-white text-lg  rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Get in touch
              </a>
                </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
      </div>
        )
}

export default Header
