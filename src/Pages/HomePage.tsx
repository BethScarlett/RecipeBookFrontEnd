import { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import Recipes from "../Data/Recipes";
import Recipe from "../Types/recipe";
import "./HomePage.scss";
import CategoryButtons from "../Components/CategoryButtons/CategoryButtons";

const HomePage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([
    ...Recipes,
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleFilterRecipes = (searchTerm: string) => {
    setFilteredRecipes(
      Recipes.filter((recipe) => {
        if (
          recipe.name.toLowerCase().includes(searchTerm) ||
          recipe.category.includes(searchTerm)
        ) {
          return recipe;
        }
      })
    );
  };

  const handleFilterByCategory = (e: FormEvent<HTMLButtonElement>) => {
    let searchTerm: string = e.currentTarget.id;
    setSelectedCategory(searchTerm);

    if (searchTerm == "All") {
      searchTerm = "";
    }

    handleFilterRecipes(searchTerm);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const cleanInput: string = e.currentTarget.value.toLowerCase();
    setSelectedCategory("All");
    handleFilterRecipes(cleanInput);
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
      <CategoryButtons
        selectedCategory={selectedCategory}
        filteredRecipes={Recipes}
        handleFilterByCategory={handleFilterByCategory}
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
