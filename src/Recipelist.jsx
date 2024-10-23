import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import axios from 'axios'

const Recipelist = () => {
    const [recipeslist, setRecipeslist] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);


  const Apikey = "74153c31338d4bdf8f3de040b57c504c";

useEffect(() => {
    const fetchRecipes = async () => {
        setLoading(true);
        try{
            const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch',{
                params: {
                    apiKey: Apikey,
                  // sample query parameter
                    number: limit,
                    offset: (currentPage - 1) * limit,
                    
        }
    });
    setTotal(response.data.totalResults);
    setRecipeslist(response.data.results);
} catch (error) {
    setError(handleError(error));
} finally {
    setLoading(false);
}
}

fetchRecipes();
}, [currentPage, limit]);




const handleError = (error) => {
    if (error.response) {
      return `Error ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      return "No response from server";
    } else {
      return "Error setting up request";
    }
  };


const handleNewPage = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(total / limit)) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
    <div className='bg-sky-300 w-full h-full'>
    <div>
        <h1 className="text-gray-700 font-bold text-2xl">Recipe List</h1>

    </div>


    {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='grid grid-cols-4'>
          {recipeslist.map((recipe, index) => (
            <div >
            <li key={index} >
                {recipe.title}
                <img src={recipe.image} alt={recipe.title} />
                </li> 
                </div>
          ))}
        </ul>
      )}
    {total > limit && (
        <div className='flex justify-center mt-2 p-1 '>
          <button  onClick={() => handleNewPage(currentPage - 1)}
            disabled={currentPage === 1} className='mr-2 bg-slate-500 text-white p-2 rounded-lg hover:text-indigo-300'
            >Previous</button>
          <button onClick={() => handleNewPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(total / limit)}
            className='ml-2 bg-black text-white p-2 rounded-lg hover:text-indigo-300'
            >Next</button>
        </div>
      )}
      </div>

      <Footer />
</>
  )
}

export default Recipelist