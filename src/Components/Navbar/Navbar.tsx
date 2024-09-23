import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__heading">Recipe Book</h1>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
