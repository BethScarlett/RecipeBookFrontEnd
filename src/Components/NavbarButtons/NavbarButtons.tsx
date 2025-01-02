import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./NavbarButtons.scss";

const NavbarButtons = () => {
  return (
    <div className="navbar-buttons">
      <Link to="/RecipeBookFrontEnd/">
        <Button heading="Home" buttonType="navbutton" />
      </Link>
      <Button heading="Random" buttonType="navbutton" />
    </div>
  );
};

export default NavbarButtons;
