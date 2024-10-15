import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipeDetails from './RecipeDetails.jsx'
import Recipelist from './Recipelist.jsx'

import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recipedetails',
    element: <RecipeDetails />,
  },
  {
    path: '/recipelist',
    element: <Recipelist />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      
  </StrictMode>,
)
