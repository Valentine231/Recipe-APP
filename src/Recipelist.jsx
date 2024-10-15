import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Recipelist = () => {
    const [recipeslist, setRecipeslist] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);


  const Apikey = "30e780a424e848b69622cc793e94c05a";

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
    <div>
    <div>
        <h1 className="text-gray-700 font-bold text-2xl">Recipe List</h1>

    </div>


    {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipeslist.map((recipe, index) => (
            <div className="flex items-center justify-between gap-4 p-4">
            <li key={index} >
                {recipe.title}
                <img src={recipe.image} alt={recipe.title} />
                </li> 
                </div>
          ))}
        </ul>
      )}
    {total > limit && (
        <div>
          <button  onClick={() => handleNewPage(currentPage - 1)}
            disabled={currentPage === 1} className='mr-2 bg-slate-500 text-white'
            >Previous</button>
          <button onClick={() => handleNewPage(currentPage + 1)}
            disabled={currentPage === Math.ceil(total / limit)}
            className='ml-2 bg-black text-white'
            >Next</button>
        </div>
      )}
      </div>

  )
}

export default Recipelist