# React + Vite

README File for Recipe Finder Application

Introduction

This is a React-based recipe finder application that allows users to search for recipes based on various parameters such as ingredients, cuisine, and dietary restrictions. The application uses the Spoonacular API to fetch recipe data.

Features

Search for recipes by ingredient, cuisine, and dietary restrictions
Filter recipes by gluten-free, ketogenic, and vegetarian options
Paginate recipe results
Display recipe details, including title, image, and summary
Work in Progress: Add favorite recipes to a list for later reference
Components

RecipeDetails: Displays a list of recipes based on the search query and filters

Searchbar: Allows users to input a search query and fetches recipe results

Recipelist: Displays a list of recipes with pagination

FavoriteRecipes: Work in Progress - Displays a list of favorite recipes
API Documentation

The application uses the Spoonacular API to fetch recipe data. The API endpoint used is https://api.spoonacular.com/recipes/complexSearch.

API Parameters

apiKey: The API key for the Spoonacular API

query: The search query for the recipe

cuisine: The cuisine of the recipe

diet: The dietary restriction of the recipe (e.g. gluten-free, ketogenic, vegetarian)

intolerances: The ingredients to exclude from the recipe

number: The number of recipes to return

offset: The offset for pagination


Installation and Setup

Clone the repository
Install the dependencies using npm install
Create a new file called apiKeys.js and add your Spoonacular API key
Import the apiKeys.js file in the RecipeDetails, Searchbar, and Recipelist components
Start the application using npm start
Usage Examples

Search for recipes by ingredient: https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&query=chicken
Filter recipes by gluten-free and ketogenic options: https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY&query=chicken&diet=gluten-free&intolerances=gluten,dairy
Contributing Guidelines

Fork the repository
Create a new branch for your feature or bug fix
Commit your changes with a descriptive commit message
Open a pull request to merge your changes into the main branch
License

This application is licensed under the MIT License.

Work in Progress: Favorite Recipes

The favorite recipes feature is currently under development. The following changes are planned:

Add a "Favorite" button to each recipe in the Recipelist component
Create a new component called FavoriteRecipes to display a list of favorite recipes
Implement local storage to store favorite recipes
Allow users to remove recipes from their favorite list
To-Do List

Implement the "Favorite" button in the Recipelist component
Create the FavoriteRecipes component
Implement local storage for favorite recipes
Allow users to remove recipes from their favorite list

Issues and Challenges Encountered

During the development of the Recipe Finder Application, the following issues and challenges were encountered:

1. API Key Management

Challenge: Managing the Spoonacular API key securely and efficiently.
Solution: Created a separate file called apiKeys.js to store the API key, and imported it into the necessary components.using this API on free mode has limited number of request per day .

2. Pagination Implementation

Challenge: Implementing pagination to display a large number of recipes.
Solution: Used the useState hook to store the current page and limit, and implemented a pagination system using the handleNewPage function.

3. Error Handling

Challenge: Handling errors and exceptions when fetching recipe data from the Spoonacular API.
Solution: Implemented a handleError function to catch and display error messages, and used try-catch blocks to handle errors when fetching recipe data.
