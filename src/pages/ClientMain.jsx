import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

Modal.setAppElement('#root');

const ClientMain = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResults, setNoResults] = useState(false);
  const abortControllerRef = useRef(null);

  const successMessage = "Your registration was successful!";

  const handleOptionClick = (option) => {
    switch (option) {
      case 'feedback':
        setModalContent('Feedback sent successfully!');
        setModalIsOpen(true);
        break;
      case 'history':
        setModalContent(
          `
          History of services:
          - Service 1: Date: 2024-08-01, Time: 10:00 AM, Service: Consultation
          - Service 2: Date: 2024-08-03, Time: 02:00 PM, Service: Follow-up
          `
        );
        setModalIsOpen(true);
        break;
      default:
        console.log('Unknown option:', option);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearch = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError('');
    setNoResults(false);

    try {
      const response = await axios.get('/api/search/freelancers', {
        params: { query, category },
        signal: controller.signal,
      });

      console.log('API response:', response.data);

      if (Array.isArray(response.data)) {
        if (response.data.length === 0) {
          setNoResults(true);
        }
        setResults(response.data);
      } else {
        console.error('Expected an array of results but received:', response.data);
        setResults([]);
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Request was canceled');
      } else {
        console.error('Error searching freelancers', error);
        setError('Failed to fetch results. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setLoading(false);
      setError('Search canceled.');
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 md:flex md:justify-between">
        {/* Seção à esquerda (Dashboard do cliente) */}
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 md:mr-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Your Client Dashboard</h1>
          <p>Your registration was successful. Explore your dashboard to get started.</p>
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

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-6 md:ml-4">
          <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
            <div className="w-full md:w-2/3">
            <label htmlFor="category" className="block text-lg font-semibold mb-2 text-center md:text-left">Find freelancer:</label>              <div className="mb-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search freelancers..."
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border rounded-lg p-2 w-full"
              >
                <option value="">Select a category</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="designer">Designer</option>
              </select>
            </div>
            <div className="w-full flex items-center justify-center mt-4">
  <button
    onClick={handleSearch}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    disabled={loading}
  >
    {loading ? 'Searching...' : 'Search'}
  </button>
  <button
    onClick={handleCancel}
    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-2"
    disabled={!loading}
  >
    Cancel
  </button>
</div>

          </div>

          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {noResults && <p className="text-center text-gray-500">Categoria não encontrada.</p>}
          {!loading && !noResults && results.length > 0 && (
            <ul className="list-disc pl-5">
              {results.map((result, index) => (
                <li key={index} className="mb-2">{result.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Information"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Notification</h2>
          <p>{modalContent}</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default ClientMain;
