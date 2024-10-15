import { useState } from 'react'
import './App.css'
 import Recipelist from './Recipelist'
import Searchbar from './searchbar'
import RecipeDetails from './RecipeDetails'



const App =()=> {
return (
<div className='w-full'>
  <div className='flex items-center justify-between gap-4 p-4'>
    <h1 className="text-gray-700 font-bold text-2xl"> welcome to Recipe cook 🧑🏼‍🍳 </h1>
   <a href="Recipelist"> Recipelist</a> 
    <Searchbar />
  </div>
  
  <div>
    <RecipeDetails />
  </div>
</div>


)
}


export default App
