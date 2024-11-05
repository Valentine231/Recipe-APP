import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';



const FavouriteRecipes = () => {
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);
   

    useEffect(() => {
        const favouriteRecipes = JSON.parse(localStorage.getItem('favouriteRecipe')) || [];
        setFavouriteRecipes(favouriteRecipes);
    }, []);

    const handleRemoverecipe=(recipeId)=> {
        const newFavouriteRecipes = favouriteRecipes.filter((recipe) => recipe.id !== recipeId);
        localStorage.setItem('favouriteRecipe', JSON.stringify(newFavouriteRecipes));
        setFavouriteRecipes(newFavouriteRecipes);
    }

    // const clearRecipe = ()=> {
    //     localStorage.removeItem('favouriteRecipe');

    //     setFavouriteRecipes([]);
    // }
    return (
        <>
        <div>
            <h2>Favourite Recipes</h2>
            <Navbar />
            {favouriteRecipes.length === 0 ? (
                <p>No favorite recipes found.</p>
            ) : (
                <ul>
                    {favouriteRecipes.map((recipe, index) => (
                        <li key={index}>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title} />
                            <p>Servings: {recipe.servings}</p>
                        <p>Ready in: {recipe.readyInMinutes} minutes</p>
                       <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                       <button onClick={()=>handleRemoverecipe(recipe.id)} className='bg-indigo-500 text-white rounded-lg hover:text-black'>Remove-Recipe</button>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    
        </>
    );
};

export default FavouriteRecipes;