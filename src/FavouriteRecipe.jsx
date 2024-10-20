import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const FavouriteRecipes = () => {
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const favouriteRecipes = JSON.parse(localStorage.getItem('favouriteRecipe')) || [];
        setFavouriteRecipes(favouriteRecipes);
    }, []);

    return (
        <div>
            <h2>Favourite Recipes</h2>
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
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavouriteRecipes;