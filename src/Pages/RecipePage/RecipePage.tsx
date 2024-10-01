import { useParams } from "react-router-dom";
import "./RecipePage.scss";
import Recipes from "../../Data/Recipes";
import Recipe from "../../Types/Recipe";
import ExpandedRecipeCard from "../../Components/ExpandedRecipeCard/ExpandedRecipeCard";
import Ingredient from "../../Types/Ingredient";
import Ingredients from "../../Data/Ingredients";
import Steps from "../../Data/Steps";
import Step from "../../Types/Step";

const RecipePage = () => {
  const { id } = useParams();
  const cleanId = Number(id);

  const filteredRecipe: Recipe[] = Recipes.filter((recipe) => {
    return recipe.id == cleanId;
  });

  const filteredIngredient: Ingredient[] = Ingredients.filter((ingredient) => {
    return ingredient.recipe_id == cleanId;
  });

  const filteredStep: Step[] = Steps.filter((step) => {
    return step.recipe_id == cleanId;
  });

  return (
    <div>
      <ExpandedRecipeCard
        filteredRecipe={filteredRecipe}
        filteredIngredient={filteredIngredient}
        filteredStep={filteredStep}
      />
    </div>
  );
};

export default RecipePage;
