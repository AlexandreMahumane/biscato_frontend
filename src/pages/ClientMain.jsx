import React, { useState } from 'react';
import axios from 'axios';
import { XCircle } from "@phosphor-icons/react";
import HeaderClient from '../components/header/headerClient';
import {Footer} from '../components/footer';

const ClientMain = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpandedSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleSearch = async () => {
    setLoading(true);
    setNoResults(false);

    try {
      const response = await axios.get('/api/search', { params: { category, description } });
      const results = response.data;
      console.log('API Response:', results);

      if (Array.isArray(results)) {
        setResults(results);
        setNoResults(results.length === 0);
        setShowAlert(true);
        setExpandedSection('results');
      } else {
        throw new Error('Dados recebidos não são um array');
      }
    } catch (error) {
      console.error('Search Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setCategory('');
    setDescription('');
  };

  const isFormValid = () => category.trim() !== '' && description.trim() !== '';

  return (
    <>
      <HeaderClient showAlert={showAlert} setShowAlert={setShowAlert} />
      <div className="container mx-auto p-4 space-y-6">
        {expandedSection === 'feedback' && (
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md max-w-md mx-auto transition-transform duration-300 hover:scale-105">
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer" onClick={() => setExpandedSection(null)}>
                <XCircle size={24} />
              </button>
            </div>
            <h1 className="text-2xl font-semibold text-blue-900 mb-4">Feedback Section</h1>
            <label htmlFor="feedback" className="block text-lg font-semibold text-gray-800 mb-2">Feedback:</label>
            <textarea
              id="feedback"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your feedback..."
              className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none mb-4"
            />
            <button
              onClick={() => { /* Implementar lógica de envio de feedback */ }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Feedback
            </button>
          </div>
        )}

        {expandedSection === 'history' && (
          <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md max-w-md mx-auto transition-transform duration-300 hover:scale-105">
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer" onClick={() => setExpandedSection(null)}>
                <XCircle size={24} />
              </button>
            </div>
            <h1 className="text-2xl font-semibold text-blue-900 mb-4">History Section</h1>
            <ul className="list-disc pl-5">
              <li>Service 1: Date: 2024-08-01, Time: 10:00 AM, Service: Consultation</li>
              <li>Service 2: Date: 2024-08-03, Time: 02:00 PM, Service: Follow-up</li>
            </ul>
          </div>
        )}

        <div className="bg-blue-50 text-blue-900 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Order our services here!</h2>
          <div className="mb-4">
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select-category mt-2 w-full"
            >
              <option value="">Select a category</option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="designer">Designer</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description..."
              className="border border-gray-300 rounded-md p-2 w-full h-20 resize-none"
            />
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={loading || !isFormValid()}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <button
              onClick={handleCancel}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={loading}
            >
              Cancel
            </button>
          </div>
          <div className="flex mt-4 justify-around flex-wrap">
            <button
              onClick={() => toggleExpandedSection('feedback')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >
              Send Feedback
            </button>
            <button
              onClick={() => toggleExpandedSection('history')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >
              View History
            </button>
          </div>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {noResults && <p className="text-center text-gray-500">No results found.</p>}
        {Array.isArray(results) && results.length > 0 && (
          <div className={`bg-blue-50 text-blue-900 p-4 rounded-lg shadow-md mx-auto mt-6 ${expandedSection === 'results' ? '' : 'hidden'}`}>
            <ul className="list-disc pl-5">
              {results.map((result, index) => (
                <li key={index} className="mb-2">{result.name}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
      <Footer />
    </>
  );
};

export default ClientMain;