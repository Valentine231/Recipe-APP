import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Searchbar = () => {
  const [searchbar, setSearchbar] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const Apikey = "30e780a424e848b69622cc793e94c05a"; // Make sure this is a valid API key

  useEffect(() => {
    const fetchResults = async () => {
      if (searchbar.length > 2) { // Only search when more than 3 characters are entered
        setLoading(true);
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
            params: {
              apiKey: Apikey, // Correct capitalization of apiKey
              query: searchbar
            }
          });
          setResults(response.data.results); // Set the search results
        } catch (error) {
          console.error('Error fetching data:', error); // Log the error
        } finally {
          setLoading(false); // Stop the loading spinner
        }
      }
    };

    fetchResults();
  }, [searchbar]);

  const handleSearchEvent = (e) => {
    setSearchbar(e.target.value);
  };

  return (
    <div>
      <input 
        type="search" 
        placeholder="Search..." 
        value={searchbar} 
        onChange={handleSearchEvent} 
        className='p-2 border border-gray-300 rounded-lg w-full'
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.title}</li> // Display the title of each result
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
