import "./Button.scss";

type ButtonProps = {
  heading: string;
};

const Button = ({ heading }: ButtonProps) => {
  return <button className="navButton">{heading}</button>;
};

export default Button;
