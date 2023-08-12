import React from "react";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b mb-12">
      <div className="flex justify-between mx-12">
        <img src={Logo} alt="" />
        <div className="flex gap-6 items-center">
          <Link to="/">Login</Link>
          <Link
            to="/"
            className="bg-violet-700 hover:bg-violet-800 text-white py-2 px-3 rounded-lg transitions"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
