import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
  <section className=' bg-slate-300 fixed top-0 left-0 right-0'>
  <div className=' flex items-center   justify-between md:px-4 sm:px-44'>
    <div className="flex items-center lg:mr-52 md:mr-2">
      <img src={logo} className="w-20" alt="" />
      <p className=" text-2xl ">Quiz World</p>
    </div>
  <nav className=" md:pr-32 ">
      <div className="w-9 md:hidden sm:mr-4" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
      {
        isMenuOpen?
        <XMarkIcon/>
        :<Bars3Icon/>
      }
      </div>
     
      <ul className={`md:flex justify-center   sm:w-38   text-xl  absolute md:static duration-250 ease-in ${isMenuOpen? 'top-20':'top-[-140px]'}`}>
        <li><Link to="/home" className=" text-center lg:px-3 px-12 py-1 md:px-2 rounded hover:bg-slate-500 hover:text-white">Home</Link></li>
        <li><Link to="/about" className="text-center lg:px-3 px-12 py-1 md:px-2 rounded hover:bg-slate-500 hover:text-white">About</Link></li>
        <li><Link to="/statatics" className="text-center lg:px-3 px-12 md:px-2 py-1 rounded hover:bg-slate-500 hover:text-white">Statatics</Link></li>
        <li><Link to="/blog" className="text-center px-12 lg:px-3 md:px-2 rounded py-1 hover:bg-slate-500 hover:text-white">Blog</Link></li>
        <li><Link to="/contact" className="text-center lg:px-3 px-12 md:px-2 rounded py-1 hover:bg-slate-500 hover:text-white">Contact</Link></li>
      </ul>

    </nav>
  </div>
  </section>
  );
};

export default Header;
