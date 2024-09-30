import Button from "../Button/Button";
import "./NavbarButtons.scss";

const NavbarButtons = () => {
  return (
    <div className="navbar-buttons">
      <Button heading="Home" buttonType="navbutton" />
      <Button heading="Create (WIP)" buttonType="navbutton" />
      <Button heading="Update (WIP)" buttonType="navbutton" />
      <Button heading="Logout (WIP)" buttonType="navbutton" />
    </div>
  );
};

export default NavbarButtons;
