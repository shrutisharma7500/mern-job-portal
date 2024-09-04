import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo2 from '../assets/logo2.webp';
import { ImCross } from "react-icons/im";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-50 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="text-black text-lg flex items-center space-x-2">
          <img src={logo2} alt="Job Portal " className="h-8" />
          {/* <IoMenu className="w-5 h-5 md:hidden" onClick={handleToggleMenu} /> */}
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <NavLink
          to="/"
          activeClassName="text-blue-500"
          className="text-black hover:text-blue-500"
        >
          Start a Job
        </NavLink>
        <NavLink
          to="/jobs-list"
          activeClassName="text-blue-500"
          className="text-black hover:text-blue-500"
        >
          Jobs Lists
        </NavLink>
        <NavLink
          to="/salary-estimate"
          activeClassName="text-blue-500"
          className="text-black hover:text-blue-500"
        >
          Salary Estimate
        </NavLink>
        <NavLink
          to="/post-job"
          activeClassName="text-blue-500"
          className="text-black hover:text-blue-500"
        >
          Post a Job
        </NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/login"
            activeClassName="text-blue-500"
            className="bg-cyan-100 text-black px-4 py-2 rounded-md hover:text-blue-500"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            activeClassName="text-blue-500"
            className="bg-cyan-200 text-black px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Signup
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={handleToggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <ImCross className="w-5 h-5" /> : <IoMenu className="w-5 h-5 " />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-2">
          <NavLink
            to="/start-job"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500 block py-2 px-4 rounded-md"
          >
            Start a Job
          </NavLink>
          <NavLink
            to="/jobs-list"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500 block py-2 px-4 rounded-md"
          >
            Jobs Lists
          </NavLink>
          <NavLink
            to="/salary-estimate"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500 block py-2 px-4 rounded-md"
          >
            Salary Estimate
          </NavLink>
          <NavLink
            to="/post-job"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500 block py-2 px-4 rounded-md"
          >
            Post a Job
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
