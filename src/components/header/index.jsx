import React, { useState } from 'react';
import Modal from 'react-modal'; 
import { List } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

Modal.setAppElement('#root');

const Header = () => {
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
        <div className="text-lg font-bold">
          <Link to="/" className="text-white hover:text-blue-300">Logo</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-300">Main</Link>
          <Link to="/client" className="hover:text-blue-300">Client</Link>
          <Link to="/freelancerProfile" className="hover:text-blue-300">Freelancer Profile</Link>
          <Link to="/searchFreelancer" className="hover:text-blue-300">Search Freelancer</Link>
          <Link to="/clientPage" className="hover:text-blue-300">Client Page</Link>
          <div className="ml-4 flex space-x-2">
            <button onClick={handleLoginClick} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">Login</button>
            <button onClick={handleSignupClick} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg">Signup</button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <List size={32} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-2 px-4">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="block py-1 hover:text-blue-300" onClick={toggleMenu}>Main</Link>
            <Link to="/client" className="block py-1 hover:text-blue-300" onClick={toggleMenu}>Client</Link>
            <Link to="/freelancerProfile" className="block py-1 hover:text-blue-300" onClick={toggleMenu}>Freelancer Profile</Link>
            <Link to="/searchFreelancer" className="block py-1 hover:text-blue-300" onClick={toggleMenu}>Search Freelancer</Link>
            <Link to="/clientPage" className="block py-1 hover:text-blue-300" onClick={toggleMenu}>Client Page</Link>
            <div className="mt-4 flex flex-col space-y-2">
              <button onClick={handleLoginClick} className="block py-1 hover:text-blue-300">Login</button>
              <button onClick={handleSignupClick} className="block py-1 hover:text-blue-300">Signup</button>
            </div>
          </div>
        </div>
      )}

      {showLogin && (
        <Modal
          isOpen={showLogin}
          onRequestClose={handleCloseForms}
          contentLabel="Login"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
        >
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto relative">
            <button onClick={handleCloseForms} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
            <form>
              <label className="block mb-4">
                <span className="text-gray-700">Nome/Telefone</span>
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
                onSubmit={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>
          </div>
        </Modal>
      )}

      {showSignup && (
        <Modal
          isOpen={showSignup}
          onRequestClose={handleCloseForms}
          contentLabel="Signup"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
          overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75"
        >
          <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto relative">
            <button onClick={handleCloseForms} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
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
        </Modal>
      )}
    </nav>
  );
};

export default Header;
``
