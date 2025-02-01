import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isHomePage ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and left side links */}
          <div className="flex items-center space-x-8">
            <h1
              className={`text-3xl font-bold ${
                isHomePage
                  ? "text-slate-200 hover:text-slate-400"
                  : "text-black"
              } `}
            >
              CinesVault
            </h1>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`${
                  isHomePage
                    ? "text-slate-200 hover:text-slate-400"
                    : "text-black"
                } transition-colors text-xl font-bold`}
              >
                Home
              </Link>
              <Link
                to="/watchlist"
                className={`${
                  isHomePage
                    ? "text-slate-200 hover:text-slate-400"
                    : "text-black"
                } transition-colors text-xl font-bold`}
              >
                WatchList
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - hidden by default, shown when menu button is clicked */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-slate-200 hover:text-slate-400 block px-3 py-2 text-base font-bold"
          >
            Home
          </Link>
          <Link
            to="/watchlist"
            className="text-slate-200 hover:text-slate-400 block px-3 py-2 text-base font-bold"
          >
            WatchList
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
