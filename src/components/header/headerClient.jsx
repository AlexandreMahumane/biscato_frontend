import { UserCircle } from "@phosphor-icons/react";
import React, { useState } from "react";

export const HeaderClient = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutClick = () => {
    if (window.confirm("Você realmente deseja sair?")) {
      localStorage.clear();
      window.location.href = "/"; // Redireciona para a página inicial
    }
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <h1 className="text-lg px-4 py-2 transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105 glow-effect cursor-pointer">
            BISCATO
          </h1>
        </div>

        <div className="relative">
  <button
    onClick={() => setShowLogout(!showLogout)}
    className="text-white focus:outline-none hover:text-blue-500 transition-all duration-300 ease-in-out"
    aria-label="User options"
  >
    <UserCircle size={22} className="transition-all duration-300 ease-in-out transform hover:scale-105 glow-effect" />
  </button>
  {showLogout && (
    <ul className="absolute right-0 mt-2 bg-blue-300 border border-blue-950 rounded-lg py-2 w-40 glow-effect transition-all duration-300 ease-in-out">
      <li
        onClick={handleLogoutClick}
        className="cursor-pointer px-4 py-2 hover:bg-blue-500 transition-all duration-300 ease-in-out"
      >
        Logout
      </li>
    </ul>
  )}
</div>

        </div>

        <div className="md:hidden flex items-center">
          
        </div>
      
    </nav>
  );
};

export default HeaderClient;
