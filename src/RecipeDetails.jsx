import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeDetails = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favouriteRecipe, setFavouriteRecipe] = useState([]);


  const Apikey = "74153c31338d4bdf8f3de040b57c504c";

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`,{
          params: {
            apiKey: Apikey,
            addRecipeInformation:true,

         
          },
        });
        console.log(response.data);

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

  useEffect(()=>{
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    setFavouriteRecipe(storedFavorites);
  },[])

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favouriteRecipe));
  }, [favouriteRecipe]);

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
    if (!favouriteRecipe.includes(recipe)) {
      setFavouriteRecipe([...favouriteRecipe, recipe.id]);
      localStorage.setItem("favoriteRecipes", JSON.stringify(favouriteRecipe));
    }
    console.log(favouriteRecipe)
  }
 

  return (
    <div className="bg-sky-500/50  w-full">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : recipes && recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <div className="mt-2">
               <span>{recipe.title}</span>
               <img src={recipe.image} alt={recipe.title} className="w-80 h-auto" />
              <p>Servings: {recipe.servings}</p>
            <p>Ready in: {recipe.readyInMinutes} minutes</p>
           <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
           </div>
           <button className="bg-black text-white p-2  " onClick={()=>Handlefavorite(recipe)}>Add-to-favoritelist</button>
            </li>
          ))}
        </ul>
      )}
      
       
    </div>
  );
};

export default RecipeDetails;