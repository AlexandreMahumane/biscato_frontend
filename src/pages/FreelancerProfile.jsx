import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/footer/';
import { Header } from '../components/header';

export const FreelancerRegistrationForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
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
      const response = await axios.post('/freelancer', {
        name,
        phone,
        password,
        location,
        category,
      });
      console.log(response.data);

      setSuccessMessage('Cadastro realizado com sucesso.');
      setTimeout(() => {
        navigate('/freelancerPage');
      }, 3000);

    } catch (error) {
      console.error('Erro ao registrar freelancer', error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Freelancer Registration</h2>
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
            <span className="text-blue-700">Location:</span>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </label>
          <label className="block mb-4">
            <span className="text-blue-700">Category:</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="writer">Writer</option>
              <option value="marketing">Marketing</option>
            </select>
          </label>
          <label className="block mb-4 flex items-center">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              required
              className="mr-2"
            />
            <span className="text-blue-700">
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
        {successMessage && (
          <div className="bg-blue-50 text-blue-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-4">
            <p className="text-blue-800">{successMessage}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
