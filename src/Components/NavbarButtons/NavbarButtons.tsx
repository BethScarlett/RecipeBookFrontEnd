import Button from "../Button/Button";
import "./NavbarButtons.scss";

const NavbarButtons = () => {
  return (
    <div className="navbar-buttons">
      <Button heading="Home" />
      <Button heading="Create" />
      <Button heading="Update" />
      <Button heading="Logout" />
    </div>
  );
};

export default NavbarButtons;
