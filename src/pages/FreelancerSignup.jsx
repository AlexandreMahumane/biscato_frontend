import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const FreelancerRegistrationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [password, setPassword] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/freelancer', {
        name,
        phone,
        documentType,
        documentId,
        password
      });
      setSuccessMessage('Client registered successfully. Please verify OTP.');
      console.log(response.data);

      // Set a timeout to show options after a few seconds
      setTimeout(() => {
        setShowOptions(true);
      }, 3000);
      navigate('/FreelancerProfile');
      
    } catch (error) {
      console.error('Error registering client', error);
    }
  };

  const handleOptionClick = (option) => {
    if (option === 'feedback') {
      navigate('/feedback');
    } else if (option === 'history') {
      navigate('/dashboard');
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        {!showOptions ? (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Freelancer Registration</h2>
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
              <span className="text-gray-700">Tipo de Documento:</span>
              <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="" id="">
                <option value="id">BI</option>
                <option value="passport">Passaporte</option>
              </select>

            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Documento Número:</span>
              <input
                type="text"
                value={documentId}
                onChange={(e) => setDocumentId(e.target.value)}
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
      </div>
      <Footer />
    </>
  );
};

