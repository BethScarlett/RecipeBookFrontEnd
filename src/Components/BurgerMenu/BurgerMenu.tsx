import "./BurgerMenu.scss";

type BurgerMenuProps = {
  toggle: boolean;
};

const BurgerMenu = ({ toggle }: BurgerMenuProps) => {
  return (
    <div className="hamburger">
      <div className={`hamburger__patty hamburger__patty--${toggle}`}></div>
      <div className={`hamburger__patty hamburger__patty--${toggle}`}></div>
      <div className={`hamburger__patty hamburger__patty--${toggle}`}></div>
    </div>
  );
};

export default BurgerMenu;
