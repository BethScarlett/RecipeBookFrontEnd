import { MouseEventHandler, useEffect, useState } from "react";
import "./Button.scss";

type ButtonProps = {
  heading: string;
  selectedCategory?: string;
  buttonType: "navbutton" | "category";
  buttonFunc?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  heading,
  selectedCategory,
  buttonType,
  buttonFunc,
}: ButtonProps) => {
  const [variant, setVariant] = useState<string>("off");

  useEffect(() => {
    if (selectedCategory == heading) {
      setVariant("on");
    } else {
      setVariant("off");
    }
  }, [selectedCategory]);

  return (
    <button
      className={`custButton custButton__${buttonType}--${variant}`}
      id={heading}
      onClick={buttonFunc}
    >
      {heading}
    </button>
  );
};

export default Button;
