import "./RecipeCard.scss";
import placeholderImg from "../../assets/Images/food-placeholder.png";

const RecipeCard = () => {
  return (
    <div className="recipe-card">
      <h2 className="recipe-card__heading">Recipe Name</h2>
      <img className="recipe-card__image" src={placeholderImg} alt="Image of dish" />
      <p className="recipe-card__description">"A short description of the dish"</p>
      <p className="recipe-card__suitable">Suitable for: These people, and those ones too</p>
    </div>
  )
}

export default RecipeCard
