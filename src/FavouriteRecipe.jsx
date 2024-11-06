import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';



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
            
            <Navbar />

            <h2 className='text-2xl text-center font-sans font-semibold m-4 tracking-[10px] md:tracking-[4px]'>Favourite Recipes</h2>
            {favouriteRecipes.length === 0 ? (
                <p>No favorite recipes found.</p>
            ) : (
                <ul>
                    {favouriteRecipes.map((recipe, index) => (
                        <li key={index} className='md:text-[16px] w-[80%] items-center mx-7 my-7 '>
                            <h3>{recipe.title}</h3>
                            <img src={recipe.image} alt={recipe.title}  className='md:items-center justify-center m-7 relative right-[1.5rem]' />
                            <p>Servings: {recipe.servings}</p>
                        <p>Ready in: {recipe.readyInMinutes} minutes</p>
                       <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                       <button onClick={()=>handleRemoverecipe(recipe.id)} className='bg-indigo-500 text-white rounded-lg hover:text-black mt-4 p-3'>Remove-Recipe</button>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>

        <Footer />
    
        </>
    );
};

export default FavouriteRecipes;