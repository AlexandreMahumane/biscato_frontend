import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Footer } from '../components/footer';
import Header from '../components/header';

export const SearchFreelancer = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResults, setNoResults] = useState(false); 
  const abortControllerRef = useRef(null);

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
      if (error.name === 'CanceledError') {
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
      <Header/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="mb-4">
            <label htmlFor="category" className="block text-lg font-semibold mb-2">Select Category:</label>
            <div className="mb-4">
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
          
          <div className="flex justify-center space-x-2 mb-4">
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
            <button
              onClick={handleCancel}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              disabled={!loading}
            >
              Cancel
            </button>
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
      <Footer />
    </>
  );
};


