
import { List } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    toggleMenu();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth', {
        identifier,
        password
      });
      setSuccessMessage('Login successfully.');
  
      console.log(response.data);

      // Set a timeout to show options after a few seconds
      setTimeout(() => {
        setShowOptions(true);
      }, 3000);
      navigate('/client')
    } catch (error) {
      console.error('Error Login user', error);
    }
  };
  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    toggleMenu();
  };

  const handleCloseForms = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <p className="text-lg px-4 hover:text-blue-950 cursor-pointer">Logo</p>
        </div>

        <div className="hidden md:flex items-center">
          <Link to="/" className="mr-4 text-lg hover:text-blue-950">
            Home
          </Link>
          <Link to="/signup/client" className="mr-4 text-lg hover:text-blue-950">
            Encontrar Freelancer
          </Link>
          <Link to="/signup/freelancer" className="mr-4 text-lg hover:text-blue-950">
            Encontrar Freelancer
          </Link>
          <Link to="/freelacerPage" className="mr-4 text-lg hover:text-blue-950">
            pagina freelacerPage
          </Link>

          <div className="ml-4">
            <button
              onClick={handleLoginClick}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
            {/* <button
              onClick={handleSignupClick}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg ml-2"
            >
              Signup
            </button> */}
          </div>
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
              Home
            </Link>
            <Link to="/client" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
              Client
            </Link>
            
            <Link to="/freelancerProfile" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
            FreelancerProfile
            </Link>
            <Link to="/searchFreelancer" className="text-sm block py-1 hover:text-blue-600" onClick={toggleMenu}>
            SearchFreelancer
            </Link>
          </div>
          <div className="mt-4">
            <button
              onClick={handleLoginClick}
              className="block py-1 text-sm hover:text-blue-600"
            >
              Login
            </button>
            {/* <button
              onClick={handleSignupClick}
              className="block py-1 text-sm hover:text-blue-600"
            >
              Signup
            </button> */}
          </div>
        </div>
      )}

      {/* Login Form */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto relative">
            <button
              onClick={handleCloseForms}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
            <form>
              <label className="block mb-4">
                <span className="text-gray-700">Nome/Telefone</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Password:</span>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Signup Form */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto relative">
            <button
              onClick={handleCloseForms}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Signup</h2>
            <form>
              <label className="block mb-4">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Email:</span>
                <input
                  type="email"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Password:</span>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};
