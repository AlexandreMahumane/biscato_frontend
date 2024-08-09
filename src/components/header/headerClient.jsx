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
          <p className="text-lg px-4 hover:text-blue-950 cursor-pointer">Biscato</p>
        </div>

        <div className="hidden md:flex items-center relative">
          <button
            onClick={() => setShowLogout(!showLogout)}
            className="text-white focus:outline-none hover:text-blue-950"
            aria-label="User options"
          >
            <UserCircle size={22} />
          </button>
          {showLogout && (
            <ul className="absolute bg-blue-300 border border-blue-950 rounded-lg mt-2 py-2 w-40">
              <li
                onClick={handleLogoutClick}
                className="cursor-pointer px-4 py-2 hover:bg-blue-300"
              >
                Logout
              </li>
            </ul>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={handleLogoutClick}
            className="text-white focus:outline-none hover:text-blue-950"
            aria-label="Logout"
          >
            <UserCircle size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderClient;
