import "./ExpandedRecipeCard.scss";
import placeholderImg from "../../assets/Images/food-placeholder.png";
import Recipe from "../../Types/Recipe";
import Ingredient from "../../Types/Ingredient";
import Step from "../../Types/Step";

type ExpandedRecipeCardProps = {
  filteredRecipe: Recipe[];
  filteredIngredient: Ingredient[];
  filteredStep: Step[];
};

const ExpandedRecipeCard = ({
  filteredRecipe,
  filteredIngredient,
  filteredStep,
}: ExpandedRecipeCardProps) => {
  return (
    <div className="expanded-card">
      <h2 className="expanded-card__heading">{filteredRecipe[0].name}</h2>
      <img
        className="expanded-card__image"
        src={placeholderImg}
        alt="Image of dish"
      />
      <p className="expanded-card__description">Description</p>
      <p className="expanded-card__ingredients">Ingredients</p>
      {filteredIngredient.map((ingredient) => (
        <p className="expanded-card__ingredient" key={ingredient.id}>
          {ingredient.name}
        </p>
      ))}
      <p className="expanded-card__steps">Steps</p>
      {filteredStep.map((step) => (
        <p className="expanded-card__step" key={step.id}>
          {step.step_number}: {step.step}
        </p>
      ))}
      <p className="expanded-card__category">
        Category: {filteredRecipe[0].category}
      </p>
    </div>
  );
};

export default ExpandedRecipeCard;
