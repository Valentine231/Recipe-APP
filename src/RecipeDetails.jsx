import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [FavouriteRecipe, setFavouriteRecipe] = useState([]);
  const [Expanded, setExpanded] = useState({});
  const navigate = useNavigate();



  const Apikey = "74153c31338d4bdf8f3de040b57c504c";

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`,{
          params: {
            apiKey: Apikey,
            addRecipeInformation:true,
            number: 9,

         
          },
        });
        

        if (response.data && response.data.results) {
          setRecipes(response.data.results)
          
          
          console.log(recipes)
        }
        
      } catch (error) {
        setError(handleError(error));
      } finally {
        setLoading(false);
      }
    };

   

    fetchRecipes();
  }, []);


  useEffect(()=>{
    console.log(recipes);
  },[recipes])


  const handleError = (error) => {
    if (error.response) {
      return `Error ${error.response.status}: ${error.response.statusText}`;
    } else if (error.request) {
      return "No response from server";
    } else {
      return "Error setting up request";
    }
  };

  const Handlefavorite = (recipe) => {
    // Retrieve existing favorites from local storage
    const existingFavourites = JSON.parse(localStorage.getItem('favouriteRecipe')) || [];
    
    // Check if the recipe already exists in favorites
    const isFavorite = existingFavourites.some(fav => fav.id === recipe.id); // Assuming each recipe has a unique 'id'

    if (!isFavorite) {
        const updatedFavourites = [...existingFavourites, recipe]; // Add new favorite
        setFavouriteRecipe(updatedFavourites); // Update state
        localStorage.setItem('favouriteRecipe', JSON.stringify(updatedFavourites)); // Save to local storage
    } else {
        console.log("This recipe is already in your favorites!");
    }

    navigate('/favouriteRecipe'); // Navigate to favorites
};

const handleExpand = (recipeId) => {
  setExpanded((prev) => ({ ...prev, [recipeId]: !prev[recipeId] }));
}
 

  return (
    <div className="bg-sky-500/50  w-full">
      
      {loading ? (
        <p className="text-center text-2xl">Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : recipes && recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        
        <ul className=" md:grid grid-cols-1grid grid-cols-3 ">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <div className="mt-2 ">
               <p>{recipe.title}</p>
               <img src={recipe.image} alt={recipe.title} className="w-50 h-auto  md:justify-center ml-3" />
              <p>Servings: {recipe.servings}</p>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
            {Expanded[recipe.id] ? (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            
          </div>
        ) : (
          <p>{recipe.summary.substring(0, 40)}...</p> // Shortened summary for collapsed view
        )}
           </div>
           <div className="flex gap-1">
            <button className="bg-white text-blue p-1  rounded-lg hover:bg-black text-indigo-400" onClick={() => handleExpand(recipe.id)}>{Expanded[recipe.id] ? "seeless" : "Seemore"}</button>
           <button className="bg-white text-blue p-1 rounded-lg hover:bg-black text-indigo-500" onClick={()=>Handlefavorite(recipe)}>Add-to-favoritelist</button>
           </div>
            </li>
          ))}
        </ul>
      )}
      
       
    </div>
  );
};

export default RecipeDetails;