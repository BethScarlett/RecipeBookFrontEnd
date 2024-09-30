import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
  heading: string;
  buttonFunc?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ heading, buttonFunc }: ButtonProps) => {
  return (
    <button className="navButton" id={heading} onClick={buttonFunc}>
      {heading}
    </button>
  );
};

export default Button;
