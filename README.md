### Recipe Book Application

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

# Search Recipes

Users have two methods of searching through the recipes. The first of these is a search box which exists at the top of the home page. Typing a recipe name into the input box will run a function to filter through all the recipes, and return the ones which contain the inputted search term. 

## Technologies used

This project has been coded in React Typescript, with SCSS also being utilised to style the project. Additionally, custom types have been created to facilitate the custom data required for the recipes, ingredients and steps. 
