import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Recipes from "../../Data/Recipes";
import "./NavbarButtons.scss";
import { useEffect, useState } from "react";

const NavbarButtons = () => {
  const lowerBound: number = Recipes[0].id;
  const upperBound: number = Recipes[Recipes.length - 1].id + 1;
  const [randRecipeId, setRandRecipeId] = useState<String>();

  const generateRandId = () => {
    return Math.floor(
      Math.random() * (upperBound - lowerBound) + lowerBound
    ).toString();
  };

  const handleSetRandomId = () => {
    setRandRecipeId(generateRandId);
  };

  useEffect(() => {
    setRandRecipeId(generateRandId);
  }, []);

  return (
    <div className="navbar-buttons">
      <Link to="/RecipeBookFrontEnd/">
        <Button heading="Home" buttonType="navbutton" />
      </Link>
      <Link
        to={"/RecipeBookFrontEnd/" + randRecipeId}
        onClick={handleSetRandomId}
      >
        <Button heading="Random" buttonType="navbutton" />
      </Link>
    </div>
  );
};

export default NavbarButtons;
