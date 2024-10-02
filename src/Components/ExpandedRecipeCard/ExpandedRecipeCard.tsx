import "./ExpandedRecipeCard.scss";
import placeholderImg from "../../../public/Images/food-placeholder.png";
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
      <p className="expanded-card__description">
        {filteredRecipe[0].description}
      </p>
      <div className="expanded-card__info">
        <div className="expanded-card__ingredients">
          Ingredients
          {filteredIngredient.map((ingredient) => (
            <p className="expanded-card__ingredient" key={ingredient.id}>
              {ingredient.name}
            </p>
          ))}
        </div>
        <div className="expanded-card__steps">
          Steps
          {filteredStep.map((step) => (
            <p className="expanded-card__step" key={step.id}>
              {step.step_number}: {step.step}
            </p>
          ))}
        </div>
      </div>
      <p className="expanded-card__category">
        Category: {filteredRecipe[0].category}
      </p>
    </div>
  );
};

export default ExpandedRecipeCard;
