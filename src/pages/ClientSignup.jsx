


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/footer/index';
import {Header} from '../components/header';

export const ClientRegistrationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const [location, setLocation] = useState('');
  const [idCard, setIdCard] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await api.post('/user', {
        name,
        phone,
        password,
        location,
        idCard 
      });
      console.log(response.data);

      // Set a timeout to show options after a few seconds
      setTimeout(() => {
        setShowOptions(true);
      }, 3000);
      navigate('/clientPage'); 

    } catch (error) {
      console.error('Erro ao registrar cliente', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header/>
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
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
           
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
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
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registro de Cliente</h2>
          <label className="block mb-4">
            <span className="text-gray-700">Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Localização:</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled={isSubmitting}
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Bilhete de Identidade:</span>
            <input
              type="text"
              value={idCard}
              onChange={(e) => setIdCard(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled={isSubmitting}
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={isSubmitting}
          >
            Registrar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

