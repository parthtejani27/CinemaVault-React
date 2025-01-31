import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute z-10 flex space-x-8 items-center pl-3 py-4 justify-end text-slate-200">
      <div className="flex space-x-8 items-center pl-3 py-4">
        <h1 className="text-3xl font-bold ">CinesVault</h1>
        <Link to="/" className="text-500 text-xl font-bold">
          Home
        </Link>
        <Link to="/watchlist" className="text-500 text-xl font-bold">
          WatchList
        </Link>
      </div>

      <div className="space-x-8 px-3 py-4">
        <Link to="/login" className="text-500 text-xl font-bold">
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
