import { useState } from 'react'
import './App.css'
 import Recipelist from './Recipelist'
import Searchbar from './searchbar'
import RecipeDetails from './RecipeDetails'
import FavouriteRecipe from './FavouriteRecipe'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const App =()=> {
return (
<div className='bg-orange-100 p-3 '>

  <Navbar />
    
  
  <hr />

  <RecipeDetails />
  <Footer />
</div>


)
}


export default App
