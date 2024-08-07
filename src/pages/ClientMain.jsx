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
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6 md:mr-4 transition-transform duration-300 hover:scale-105">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Your Client Dashboard</h1>
          <p className="mb-4">Your registration was successful. Explore your dashboard to get started.</p>
          <div className="flex justify-around">
            <button
              onClick={() => handleOptionClick('feedback')}
              className="btn-feedback"
            >
              Give Feedback
            </button>
            <button
              onClick={() => handleOptionClick('history')}
              className="btn-history"
            >
              View History
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-6 md:ml-4">
          <div className="mb-4 md:flex md:space-x-4">
            <div className="w-full md:w-2/3">
              <label htmlFor="category" className="block text-lg font-semibold mb-2 text-center md:text-left">Find freelancer:</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search freelancers..."
                className="input-search"
              />
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="select-category mt-2"
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
                className="btn-search"
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
              <button
                onClick={handleCancel}
                className="btn-cancel"
                disabled={!loading}
              >
                Cancel
              </button>
            </div>
          </div>

          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {noResults && <p className="text-center text-gray-500">No results found.</p>}
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
        className="modal-overlay"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="text-xl font-semibold mb-4">Notification</h2>
          <p>{modalContent}</p>
          <button
            onClick={closeModal}
            className="btn-close"
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
