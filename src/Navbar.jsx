import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Searchbar from './searchbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='flex items-center justify-between p-4 w-full bg-gray-300'>
           {/* Hamburger Button */}
           <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center">
          <span className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>

            {/* Navigation Links */}
            <ul className={`flex-col md:flex-row md:flex md:justify-between gap-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
         
         <li>
             <NavLink to='/recipedetails' className="text-gray-700 hover:text-blue-500">RecipeDetail</NavLink>
           </li>
           <li>
             <NavLink to='/recipelist' className="text-gray-700 hover:text-blue-500">RecipeList</NavLink>
           </li>
           <li>
             <NavLink to='/favouriterecipe' className="text-gray-700 hover:text-blue-500">Favourite</NavLink>
           </li>
         </ul>

        <h1 className="text-gray-700 font-bold text-2xl font-sans ">KITCHEN COOK 🧑🏼‍🍳</h1>

      <div className='hidden sm:ml-5'>
        <Searchbar />
        </div>
     

    
        <div className='md:block'>
        <Searchbar />
        </div>
      </nav>
    </div>
  );
};


export default Navbar