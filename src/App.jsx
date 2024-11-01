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
<div className='bg-orange-100 p-3'>
  <div className='flex items-center justify-between gap-4 p-4 w-70 '>
    <h1 className="text-gray-700 font-bold text-2xl sm:text-xl md:2xl"> welcome to Recipe cook 🧑🏼‍🍳 </h1>
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
