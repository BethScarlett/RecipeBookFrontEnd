import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavbarButtons from "../NavbarButtons/NavbarButtons";
import "./Navbar.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar">
        <h1 className="navbar__heading">Recipe Book</h1>
        <span onClick={handleShowMenu}>
          <BurgerMenu toggle={showMenu} />
        </span>
      </div>
      <div className={`navbuttons navbuttons--${showMenu}`}>
        <NavbarButtons />
      </div>
    </>
  );
};

export default Navbar;
