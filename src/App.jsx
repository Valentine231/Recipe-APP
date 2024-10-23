import { useState } from 'react'
import './App.css'
 import Recipelist from './Recipelist'
import Searchbar from './searchbar'
import RecipeDetails from './RecipeDetails'
import FavouriteRecipe from './FavouriteRecipe'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const App =()=> {
return (
<div className='w-full '>
  <div className='flex items-center justify-between gap-4 p-4 w-70 '>
    <h1 className="text-gray-700 font-bold text-2xl"> welcome to Recipe cook 🧑🏼‍🍳 </h1>
   <Link to='/recipelist'> Recipe List</Link>
   <Link to='/favouriterecipe'> Favourite</Link>
    <Searchbar />
   
  </div>

  <RecipeDetails />
  <Footer />
</div>


)
}


export default App
