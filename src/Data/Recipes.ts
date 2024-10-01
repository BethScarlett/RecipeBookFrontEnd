import Recipe from "../Types/Recipe";

const Recipes: Recipe[] = [
  {
    id: 1,
    img: "t",
    name: "Spaghetti Bolognese",
    description: "A super simple spag bol.",
    category: "Meat",
    user_id: 1,
  },
  {
    id: 2,
    img: "t",
    name: "Bread",
    description: "A lovely fresh loaf.",
    category: "Baked Goods",
    user_id: 1,
  },
  {
    id: 3,
    img: "t",
    name: "Chicken & Leek Pie",
    description: "Chicken, leek and delicious gravy encased in pastry.",
    category: "Meat",
    user_id: 2,
  },
  {
    id: 4,
    img: "t",
    name: "Cake",
    description: "Simple vanilla sponge cake.",
    category: "Sweet Treats",
    user_id: 1,
  },
  {
    id: 5,
    img: "t",
    name: "Cajun Chicken",
    description: "One pot goodness with a cajun kick.",
    category: "Meat",
    user_id: 3,
  },
];

export default Recipes;
