import { MouseEventHandler, useEffect, useState } from "react";
import Recipe from "../../Types/recipe";
import "./CategoryButtons.scss";
import Button from "../Button/Button";

type CategoryButtonsProps = {
  filteredRecipes: Recipe[];
  handleFilterByCategory: MouseEventHandler<HTMLButtonElement>;
};

const CategoryButtons = ({
  filteredRecipes,
  handleFilterByCategory,
}: CategoryButtonsProps) => {
  const [distinctCategories, setDistinctCategories] = useState<string[]>([]);

  useEffect(() => {
    getDistinctCategories();
  }, [filteredRecipes]);

  const getDistinctCategories = () => {
    const filteredCategories: string[] = [];
    filteredRecipes.map((recipe) => {
      if (!filteredCategories.includes(recipe.category)) {
        filteredCategories.push(recipe.category);
      }
    });
    setDistinctCategories(filteredCategories);
  };

  return (
    <div>
      <Button heading="All" buttonFunc={handleFilterByCategory} />
      {distinctCategories.map((category) => (
        <Button heading={category} buttonFunc={handleFilterByCategory} />
      ))}
    </div>
  );
};

export default CategoryButtons;
