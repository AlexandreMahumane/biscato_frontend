import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 bg-opacity-50 text-white">
      <div className="text-lg font-bold">Logo</div>
      <nav className="sm:hidden flex space-x-4">
        <ul className="flex space-x-4">
          <li><a href="#encontrar-trabalhador" className="hover:text-yellow-500">Encontrar trabalhador</a></li>
          <li><a href="#encontrar-trabalho" className="hover:text-yellow-500">Encontrar trabalho</a></li>
        </ul>
      </nav>
      <div className="sm:hidden flex space-x-4">
        <button className="hover:text-yellow-500">Log In</button>
        <button className="hover:text-yellow-500">Sign Up</button>
      </div>
      <div className="hidden sm:flex items-center">

        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 h-96 w-full bg-gray-800 \ sm:flex flex-col items-center space-y-4 py-5 hidden">
          <a href="#encontrar-trabalhador" className="hover:text-yellow-500">Encontrar trabalhador</a>
          <a href="#encontrar-trabalho" className="hover:text-yellow-500">Encontrar trabalho</a>
          <button className="hover:text-yellow-500">Log In</button>
          <button className="hover:text-yellow-500">Sign Up</button>
        </div>
      )}
    </header>
  );
};




