import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "react-loading";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    <>
    <Navbar />
    <div className="border-gray-200 rounded-lg  w-full flex items-center justify-center min-h-screen gap-[6rem]">
      
      {loading ? (
        <div className="flex flex-col items-center">
          <Loading type="spin" color="#000" width={50} height={50} />
          <p className="text-center text-2xl">Loading...</p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : recipes && recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        
        <ul className="ml-4 mt-4 md:grid grid-cols-1grid grid-cols-3 items-center gap-4  sm:items-center mr-5">
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <div className="mt-2 ">
               <p className="ml-3">{recipe.title}</p>
               <img src={recipe.image} alt={recipe.title} className="w-50 h-auto md:justify-center ml-3" />
              <p className="ml-3">Servings: {recipe.servings}</p>
            <p className="ml-3" >Ready in: {recipe.readyInMinutes} minutes</p>
            {Expanded[recipe.id] ? (
          <div>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            
          </div>
        ) : (
          <p className="ml-3">{recipe.summary.substring(0, 40)}...</p> // Shortened summary for collapsed view
        )}
           </div>
           <div className="flex gap-16">
            <button className="bg-white text-blue p-1  rounded-lg hover:bg-black text-indigo-400" onClick={() => handleExpand(recipe.id)}>{Expanded[recipe.id] ? "seeless" : "Seemore"}</button>
           <button className="bg-white text-blue p-1 rounded-lg hover:bg-black text-indigo-500" onClick={()=>Handlefavorite(recipe)}>Add-to-favoritelist</button>
           </div>
            </li>
          ))}
        </ul>
      )}
      
       
    </div>
    <Footer />
    </>
  );

};

export default RecipeDetails;