import "./RecipeCard.scss";
import placeholderImg from "../../assets/Images/food-placeholder.png";

type RecipeCardProps = {
  name: string;
  description: string;
  category: string;
};

const RecipeCard = ({ name, description, category }: RecipeCardProps) => {
  return (
    <div className="recipe-card">
      <h2 className="recipe-card__heading">{name}</h2>
      <img
        className="recipe-card__image"
        src={placeholderImg}
        alt="Image of dish"
      />
      <p className="recipe-card__description">{description}</p>
      <p className="recipe-card__suitable">Category: {category}</p>
    </div>
  );
};

export default RecipeCard;
