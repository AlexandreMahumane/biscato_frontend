import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('/api/search/freelancers', { params: { query } });
      setResults(response.data);
    } catch (error) {
      console.error('Error searching freelancers', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search freelancers..." />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map(freelancer => (
          <li key={freelancer.id}>
            <a href={`/freelancer/${freelancer.id}`}>{freelancer.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
