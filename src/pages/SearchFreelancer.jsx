import React, { useState } from 'react';
import axios from 'axios';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(''); 
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/search/freelancers', {
        params: { query, category }, 
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching freelancers', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="mb-4">
          <label htmlFor="category" className="block text-lg mb-2">Select Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg p-2 w-full"
          >
            <option value="">Select a category</option>
            <option value="electrician">Electrecita</option>
            <option value="plumber">mecanico</option>
            <option value="carpenter">Carpinteiro</option>
            <option value="designer">pedreiro</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search freelancers..."
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
        <ul className="mt-4">
          {results.map(freelancer => (
            <li key={freelancer.id} className="mb-2">
              <a href={`/freelancer/${freelancer.id}`} className="text-blue-500 hover:underline">
                {freelancer.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default SearchBar;
