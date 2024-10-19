
import React, { useState, useEffect } from 'react';

const FavoriteRecipes = ({ recipes }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Load favorite recipes from local storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      try {
        setFavoriteRecipes(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Error parsing favorite recipes from local storage:', error);
      }
    }
  }, []);
  // Filter recipes to show only favorites
  const favoriteList = recipes ? recipes.filter((recipe) =>
    favoriteRecipes.includes(recipe.id)
  ):[];

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favoriteList.length > 0 ? (
        favoriteList.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} />
          </div>
        ))
      ) : (
        <p>No favorite recipes yet!</p>
      )}
    </div>
  );
};

export default FavoriteRecipes;


