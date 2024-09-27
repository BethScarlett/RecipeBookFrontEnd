import Button from "../Button/Button";
import "./NavbarButtons.scss";

const NavbarButtons = () => {
  return (
    <div className="navbar-buttons">
      <Button heading="Home" />
      <Button heading="Create (WIP)" />
      <Button heading="Update (WIP)" />
      <Button heading="Logout (WIP)" />
    </div>
  );
};

export default NavbarButtons;
