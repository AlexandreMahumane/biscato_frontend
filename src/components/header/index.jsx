import { List } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <p className="text-lg px-4 hover:text-blue-950 cursor-pointer">Logo</p>
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/" className="mr-4 text-lg hover:text-blue-950">
            Main
          </Link>
          <Link to="/client" className="mr-4 text-lg hover:text-blue-950">
            Client
          </Link>
          <Link to="/feedback" className="mr-4 text-lg hover:text-blue-950">
            Feedback
          </Link>
          <Link to="/search" className="text-lg hover:text-blue-950">
            Buscar Freelancers
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none hover:text-blue-950"
            onClick={toggleMenu}
          >
            <List size={32} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
              Main
            </Link>
            <Link to="/client" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
              Client
            </Link>
            <Link to="/feedback" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
              Feedback
            </Link>
            <Link to="/search" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
              Buscar Freelancers
            </Link>
          </div>
          <div className="mt-4">
            <Link to="/login" className="block py-1 text-sm hover:text-blue-600" onClick={toggleMenu}>
              Login
            </Link>
            <Link to="/signup" className="block py-1 text-sm hover:text-blue-600" onClick={toggleMenu}>
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
