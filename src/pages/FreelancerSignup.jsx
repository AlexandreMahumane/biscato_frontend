import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export const FreelancerRegistrationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [password, setPassword] = useState('');
  const [documentId, setDocumentId] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
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
        password,
        category,
        description
      });
      setSuccessMessage('Cadastro realizado com sucesso. Por favor, verifique o OTP.');
      console.log(response.data);

      setTimeout(() => {
        setShowOptions(true);
      }, 3000);
      navigate('/FreelancerProfile');

    } catch (error) {
      console.error('Erro ao registrar freelancer', error);
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
          <form onSubmit={handleSubmit} className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Freelancer Registration</h2>
            <label className="block mb-4">
              <span className="text-blue-700">Name:</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">Phone:</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">Document Type:</span>
              <select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Document Type</option>
                <option value="id">ID</option>
                <option value="passport">Passport</option>
              </select>
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">Document Number:</span>
              <input
                type="text"
                value={documentId}
                onChange={(e) => setDocumentId(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">Password:</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">Category:</span>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a category</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="designer">Designer</option>
              </select>
            </label>
            <label className="block mb-4">
              <span className="text-blue-700">Description:</span>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your description..."
                className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </form>
        ) : (
          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">{successMessage}</h2>
            <div className="flex flex-col md:flex-row md:justify-around mt-4">
              <button
                onClick={() => handleOptionClick('feedback')}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md mb-2 md:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Give Feedback
              </button>
              <button
                onClick={() => handleOptionClick('history')}
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
