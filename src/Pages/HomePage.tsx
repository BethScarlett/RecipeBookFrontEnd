import Navbar from "../Components/Navbar/Navbar";
import RecipeCard from "../Components/RecipeCard/RecipeCard";
import Recipes from "../Data/Recipes";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {Recipes.map((recipe) => (
        <div key={recipe.id}>
          <RecipeCard
            name={recipe.name}
            description={recipe.description}
            category={recipe.category}
          />
        </div>
      ))}
      {/* <RecipeCard /> */}
    </div>
  );
};

export default HomePage;
