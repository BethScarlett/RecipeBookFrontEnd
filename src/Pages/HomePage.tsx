import { ChangeEvent, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import Recipes from "../Data/Recipes";
import Recipe from "../Types/recipe";
import "./HomePage.scss";

const HomePage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([
    ...Recipes,
  ]);

  const filterByName = (searchTerm: string) => {
    setFilteredRecipes(
      Recipes.filter((recipe) => {
        if (recipe.name.includes(searchTerm)) {
          return recipe;
        }
      })
    );
    console.log(filteredRecipes);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanInput: string =
      e.currentTarget.value.slice(0, 1).toUpperCase() +
      e.currentTarget.value.slice(1);
    filterByName(cleanInput);
  };

  return (
    <div>
      <Navbar />
      <input type="text" placeholder="Search ..." onChange={handleInput} />
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard
            name={recipe.name}
            description={recipe.description}
            category={recipe.category}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
