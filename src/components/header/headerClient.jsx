import { UserCircle } from "@phosphor-icons/react";
import React, { useState } from "react";

export const HeaderClient = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.href = "/"; 
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <h1 className="text-lg px-4 py-2 transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105 glow-effect cursor-pointer">
            BISCATO
          </h1>
        </div>

        <div className="relative border">
          <button
            onClick={() => setShowLogout(!showLogout)}
            className="text-white focus:outline-none hover:text-blue-500 transition-all duration-300 ease-in-out"
            aria-label="User options"
          >
            <UserCircle size={32} className="transition-all duration-300 ease-in-out transform hover:scale-105 glow-effect" />
          </button>
          {showLogout && (
            <ul className="absolute right-[-44px] top-16 bg-blue-500 border border-blue-300 rounded-lg py-2 sm:py-3 md:py-4 lg:py-5 w-28 sm:w-32 md:w-36 lg:w-40 transition-colors duration-300 ease-in-out shadow-md">
            <li
              onClick={handleLogoutClick}
              className="cursor-pointer px-4 py-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
            >
              Logout
            </li>
          </ul>
          
          )}
        </div>
      </div>
    </nav>
  );
};
export default HeaderClient;
