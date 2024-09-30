import { useEffect, useState } from "react";
import Recipe from "../../Types/recipe";
import "./CategoryButtons.scss";
import Button from "../Button/Button";

type CategoryButtonsProps = {
  filteredRecipes: Recipe[];
};

const CategoryButtons = ({ filteredRecipes }: CategoryButtonsProps) => {
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
      <Button heading="All" />
      {distinctCategories.map((category) => (
        <Button heading={category} />
      ))}
    </div>
  );
};

export default CategoryButtons;
