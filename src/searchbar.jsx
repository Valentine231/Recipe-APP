import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Searchbar = () => {
  const [searchbar, setSearchbar] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const Apikey = "74153c31338d4bdf8f3de040b57c504c"; // Make sure this is a valid API key

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

  const handlesearch=()=>{
    if(searchbar.length>2){
      setShow(searchbar)
    }
  }

  return (
    <div className='flex items-center relative'>
      <input 
        type="search" 
        placeholder="Search..." 
        value={searchbar} 
        onChange={handleSearchEvent} 
        className='p-2 border border-gray-300 rounded-lg w-full'
        
      />

      <button  className="ml-2 p-2 bg-blue-500 text-white rounded-lg" onClick={handlesearch}>search</button>

      {show && (
        <ul  className="absolute top-7 left-1  m-auto text-xs p-4 bg-white z-10 border border-gray-300 rounded-lg mt-3">
          {results.map((result, index) => (
          
              <li key={index}>{result.title}</li>
             
             // Display the title of each result
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
