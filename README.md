# Recipe Book Application

Welcome to my Recipe Book Application! Here you will find a brief run down of how it functions, as well a short description about the project.

## How to operate

Upon launch, this application will display a list of stored recipes (currently being held in a JSON data file) in the form of 'Recipe Cards'. Each card contains the recipe name, an image of said recipe, a short description and the category the recipe falls into. The cards are mapped onto the screen using the .map function, allowing for any number of cards to be rendered at once. 

Additionally, the home page contains a nav menu which is housed within a burger menu next to the page heading. The options available here include:

- Return to the home page (Home Page)
- Create a Recipe (Create Recipe)*
- Update an existing recipe (Update Recipe)*
- Logout of the application (Logout)*

Furthermore, users can conduct the following tasks within the application:

- Search recipes
- Expand recipes

### Search Recipes

Users have two methods of searching through the recipes. The first of these is a search box which exists at the top of the home page. Typing a recipe name into the input box will run a function to filter through all the recipes, and return the ones which contain the inputted search term. The inputted search term ignores casing, and doesn't require the exact spelling. As long as the recipes names include the the term, they will be returned (for instance searching ead will return Bread).

### Expand Recipes

Clicking on any of the cards will 'Expand' them, displaying additional information related to the clicked recipe. The expanded cards contain all the information the regular cards do, as well a set of ingredients and steps required to make the recipe. This implementation was chosen to keep the basic information concise, while also providing enough for users to choose a recipe they may wish to make. 

The expanded card works by utilising useParams to grabe the recipe id from the url, and filtering the steps and ingredients data (again both of which are currently stored in data files) where the useParam recipe id matches the recipe_id in the aforementioned data. 

## Technologies used

This project has been coded in React Typescript, with SCSS also being utilised to style the project. Additionally, custom types have been created to facilitate the custom data required for the recipes, ingredients and steps. 

To enable navigation, this project implements react router dom. The routes also include a path with a :recipeID, populated using each recipe cards id which exist as part of it's data type. This route is used for the above expanded recipe card feature. 
