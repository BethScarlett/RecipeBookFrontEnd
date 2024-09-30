import { MouseEventHandler, useEffect, useState } from "react";
import Recipe from "../../Types/recipe";
import "./CategoryButtons.scss";
import Button from "../Button/Button";

type CategoryButtonsProps = {
  selectedCategory: string;
  recipes: Recipe[];
  handleFilterByCategory: MouseEventHandler<HTMLButtonElement>;
};

const CategoryButtons = ({
  selectedCategory,
  recipes,
  handleFilterByCategory,
}: CategoryButtonsProps) => {
  const [distinctCategories, setDistinctCategories] = useState<string[]>([]);

  useEffect(() => {
    getDistinctCategories();
  }, [recipes]);

  const getDistinctCategories = () => {
    const filteredCategories: string[] = [];
    recipes.map((recipe) => {
      if (!filteredCategories.includes(recipe.category)) {
        filteredCategories.push(recipe.category);
      }
    });
    setDistinctCategories(filteredCategories);
  };

  return (
    <div className="category-buttons">
      <Button
        heading="All"
        selectedCategory={selectedCategory}
        buttonFunc={handleFilterByCategory}
        buttonType="category"
      />
      {distinctCategories.map((category) => (
        <Button
          heading={category}
          selectedCategory={selectedCategory}
          buttonFunc={handleFilterByCategory}
          buttonType="category"
        />
      ))}
    </div>
  );
};

export default CategoryButtons;
