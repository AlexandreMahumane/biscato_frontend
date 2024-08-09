
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HeaderClient from '../components/header/headerClient';
import Footer from '../components/footer';



export const ClientRegistrationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [idCard, setIdCard] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false); // Estado para aceitação dos termos
  const [successMessage, setSuccessMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Você deve aceitar os termos e condições para se registrar.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await axios.post('/user', {
        name,
        phone,
        password,
        location,
        idCard
      });
      console.log(response.data);

      setSuccessMessage('Cadastro realizado com sucesso.');
      setShowOptions(true);
      setTimeout(() => {
        navigate('/clientPage'); 
      }, 3000);

    } catch (error) {
      console.error('Erro ao registrar cliente', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HeaderClient/>
      <div> 
        <img src="" alt="" />
      </div>
      <div className="container mx-auto p-4">
        {!showOptions ? (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Client Registration</h2>
            <label className="block mb-4">
              <span className="text-gray-700">Name:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Telefone:</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Senha:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
                className="mr-2"
              />
              <span className="text-gray-700">
                Aceito os <a href="/terms" className="text-blue-600 hover:underline">termos e condições</a>
              </span>
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Registrando...' : 'Registrar'}
            </button>
            <p className="mt-4 text-center">
              Já tem uma conta? <a href="/login" className="text-blue-600 hover:underline">Inicie sessão</a>
            </p>
          </form>
        ) : (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{successMessage}</h2>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handleOptionClick('feedback')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Give Feedback
              </button>
              <button
                onClick={() => handleOptionClick('history')}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                View History
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};