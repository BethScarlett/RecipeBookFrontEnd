import "./ExpandedRecipeCard.scss";
import placeholderImg from "../../assets/Images/food-placeholder.png";

const ExpandedRecipeCard = () => {
  return (
    <div className="expanded-card">
      <h2 className="expanded-card__heading">Heading</h2>
      <img
        className="expanded-card__image"
        src={placeholderImg}
        alt="Image of dish"
      />
      <p className="expanded-card__description">Description</p>
      <p className="expanded-card__description">Ingredients</p>
      <p className="expanded-card__description">Steps</p>
      <p className="expanded-card__suitable">Suitable</p>
    </div>
  );
};

export default ExpandedRecipeCard;
