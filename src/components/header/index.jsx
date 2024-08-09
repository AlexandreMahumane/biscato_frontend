import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import HeaderClient from "./headerClient";
import { api } from "../../apiConfig";

export const Header = ({ userType }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false); // Adicionado para mostrar opções após login
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      console.log({ identifier, password })
      const response = await api.post('/auth', { identifier, password });
      setSuccessMessage('Login successful');
      setErrorMessage(''); 

      
      console.log(response.data)

      navigate('/client');
    } catch (error) {
      console.error('Error logging in user', error);
      setErrorMessage('Invalid credentials, please try again.'); 

    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    toggleMenu();
  };

  if (userType === "client" || userType === "freelancer" || userType === "admin") {
    return <HeaderClient />;
  }

  const handleCloseForms = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
            <h1 className="text-2xl font-bold px-4 py-2 transition-all duration-300 ease-in-out transform hover:text-blue-500 hover:scale-105 glow-effect">
              BISCATO
            </h1>
          </div>
        </div>

        <div className="hidden md:flex flex-grow justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Home
          </NavLink>
          <NavLink
            to="/signup/client"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Encontrar Freelancer
          </NavLink>
          <NavLink
            to="/signup/freelancer"
            className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
          >
            Encontrar Trabalho
          </NavLink>
        </div>

        <div className="flex items-center">
          <div className="ml-4">
            <button
              onClick={handleLoginClick}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-blue-950 font-bold"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
            >
              Home
            </NavLink>
            <NavLink
              to="/signup/client"
              className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
            >
              Encontrar Freelancer
            </NavLink>
            <NavLink
              to="/signup/freelancer"
              className={({ isActive }) => `mr-4 text-lg transition-all duration-300 ease-in-out transform ${isActive ? 'text-blue-950' : 'hover:text-blue-500 hover:scale-105'} glow-effect`}
            >
              Encontrar Trabalho
            </NavLink>
          </div>
          <div className="mt-4">
            <button
              onClick={handleLoginClick}
              className="block py-2 px-4 text-lg font-bold hover:text-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Login Form */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-30">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto relative">
            <button
              onClick={handleCloseForms}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                <span className="text-gray-700">Nome/Telefone</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Senha</span>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              {errorMessage && (
                <p className="text-red-500 mb-4">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
