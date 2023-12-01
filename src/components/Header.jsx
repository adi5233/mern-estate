import React from "react";
import { FaSearch } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-sm">
      <div className="flex flex-warp p-2 justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="flex flex-wrap text-sm sm:text-xl font-bold">
            <span className="text-slate-500">Aditya</span>
            <span className="text-slate-700">Senapati</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="serarch"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          ></input>
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline text-slate-700 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
