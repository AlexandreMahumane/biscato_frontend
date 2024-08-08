import { UserCircle } from "@phosphor-icons/react";
import React from "react";

const HeaderClient = () => {
  const handleFeedbackClick = () => {
    // Implementar lógica para mostrar o formulário de feedback
  };

  const handleLogoutClick = () => {
    localStorage.clear(); // Limpa os dados do localStorage
    window.location.href = "/login"; // Redireciona para a página de login
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <p className="text-lg px-4 hover:text-blue-950 cursor-pointer">Logo</p>
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
