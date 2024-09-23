import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Button from "../Button/Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__heading">Recipe Book</h1>
        <BurgerMenu />
      </div>
      <Button heading="Logout" />
    </>
  );
};

export default Navbar;
