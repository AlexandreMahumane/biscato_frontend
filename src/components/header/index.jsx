import React, { useState } from 'react';

import Modal from 'react-modal';
import { Link, useNavigate } from 'react-router-dom';

Modal.setAppElement('#root'); // Define o elemento raiz para o Modal



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu
  const [showLogin, setShowLogin] = useState(false); // Estado para controlar a exibição do formulário de login
  const navigate = useNavigate(); // Hook para navegação programática

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para lidar com o clique no botão de login
  const handleLoginClick = () => {
    setShowLogin(true);
    setIsMenuOpen(false); // Fecha o menu ao abrir o formulário de login
  };

  // Função para lidar com o envio do formulário de login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lógica de autenticação aqui (simulada com navegação)
      // Suponha que o login seja bem-sucedido e o tipo de usuário seja 'client', 'freelancer' ou 'admin'
      const userType = 'client'; // Simulação - deve ser substituído com sua lógica real

      // Redireciona com base no tipo de usuário
      switch (userType) {
        case 'client':
          navigate("/client"); // Navega para a página do cliente após o login
          break;
        case 'freelancer':
          navigate("/freelancer"); // Navega para a página do freelancer após o login
          break;
        case 'admin':
          navigate("/admin"); // Navega para a página do administrador após o login
          break;
        default:
          navigate("/"); // Caso nenhum tipo correspondente seja encontrado, volta para a página inicial
          break;
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  // Função para fechar os formulários (login)
  const handleCloseForms = () => {
    setShowLogin(false); // Define o estado para esconder o formulário de login
  };

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">

        <div className="border-2 border-gray-300 rounded-lg px-2 flex items-center">
          <p className="text-lg px-4 hover:text-blue-950 cursor-pointer">Biscato</p>
        </div>

        {/* Links para telas maiores */}
        <div className="hidden md:flex items-center">
          <Link to="/" className="mr-4 text-lg hover:text-blue-950">
            Home
          </Link>
          <Link to="/signup/client" className="mr-4 text-lg hover:text-blue-950">
            Encontrar Freelancer
          </Link>
          <Link to="/signup/freelancer" className="mr-4 text-lg hover:text-blue-950">
            Tornar-se Freelancer
          </Link>

          {/* Botão de login */}
          <div className="ml-4">
            <button
              onClick={handleLoginClick}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>

          </div>
        </div>

        {/* Botão de menu para telas menores */}
        <div className="md:hidden flex items-center">

        <div className="md:hidden flex flex-col items-center mt-4">
          <Link to="/" className="mb-4 text-lg hover:text-blue-950">
            Home
          </Link>
          <Link to="/signup/client" className="mb-4 text-lg hover:text-blue-950">
            Encontrar Freelancer
          </Link>
          <Link to="/signup/freelancer" className="mb-4 text-lg hover:text-blue-950">
            Tornar-se Freelancer
          </Link>

          {/* Botão de login no menu móvel */}
          <button
            onClick={handleLoginClick}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      )}

      {/* Formulário de Login */}

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
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                <span className="text-gray-700">Nome/Telefone</span>
                <input

                  type="text"
                  required
                  className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Password:</span>
                <input
                  type="password"
                  required
                  className="text-gray-700 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default Header;

