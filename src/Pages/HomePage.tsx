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
        if (recipe.name.toLowerCase().includes(searchTerm)) {
          return recipe;
        }
      })
    );
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanInput: string = e.currentTarget.value.toLowerCase();
    filterByName(cleanInput);
  };

  return (
    <div className="homepage">
      <Navbar />
      <input
        className="homepage__search"
        type="text"
        placeholder="Search ..."
        onChange={handleInput}
      />
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
