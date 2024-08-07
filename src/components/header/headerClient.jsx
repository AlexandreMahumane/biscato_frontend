import { UserCircle } from "@phosphor-icons/react";

import React, { useState } from "react";

const HeaderClient = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleFeedbackClick = () => {
    setShowFeedback(true);
  };

  

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    localStorage.clear(); 
    window.location.href = "/login"; 
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <p className="text-lg px-4 hover:text-blue-950 cursor-pointer">Biscato</p>
        </div>

        <div className="hidden md:flex items-center">
          <div className="ml-4">
            <button
              onClick={handleFeedbackClick}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg mr-4"
            >
              Feedback
            </button>

            <button
              onClick={handleLogoutClick}
              className="text-white focus:outline-none hover:text-blue-950"
            >
              <UserCircle size={22} />
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none hover:text-blue-950"
            onClick={handleLogoutClick}
          >
            <UserCircle size={22} />
          </button>
        </div>
      </div>

      
      
    </nav>
  );
};

export default HeaderClient;
