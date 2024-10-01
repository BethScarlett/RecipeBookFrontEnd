import { useParams } from "react-router-dom";
import "./RecipePage.scss";
import Recipes from "../../Data/Recipes";
import Recipe from "../../Types/Recipe";
import ExpandedRecipeCard from "../../Components/ExpandedRecipeCard/ExpandedRecipeCard";

const RecipePage = () => {
  const { id } = useParams();
  const cleanId = Number(id);

  const filteredRecipe: Recipe[] = Recipes.filter((recipe) => {
    return recipe.id == cleanId;
  });

  return (
    <div>
      <ExpandedRecipeCard />
    </div>
  );
};

export default RecipePage;
