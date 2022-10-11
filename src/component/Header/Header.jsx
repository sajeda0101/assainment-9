import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 drop-shadow-md  bg-slate-200 fixed top-0 left-0 right-0">
      <div className="relative flex items-center justify-between ">
        <Link to="/" className="inline-flex items-center">
          <img src={logo} alt="" className="w-16 ml-6" />
          <span className="  text-xl font-bold tracking-wide text-gray-800 uppercase">
            Quiz World
          </span>
        </Link>
        <ul className="flex items-center text-white hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/home"
              className="font-medium tracking-wide text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-medium tracking-wide text-white text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/statatics"
              className="font-medium text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Statatics
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="font-medium text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-medium text-white tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Contact
            </Link>
          </li>
        </ul>
     
      <div className="lg:hidden">
        <button
          className="p-3 mr-3 transition duration-200 rounded"
          onClick={() => setIsMenuOpen(true)}
        ></button>
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                {/* <div className="flex">
                  <Link>
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  <img src={logo} alt="" className="w-16"/>
                      Quiz World
                    </span>
                  </Link>
                </div> */}
                <div>
                  <button
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  ></button>
                </div>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link
                      to="/home"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/statics"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Statics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default Header;
