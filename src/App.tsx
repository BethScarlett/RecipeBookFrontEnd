import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import RecipePage from "./Pages/RecipePage/RecipePage";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/RecipeBookFrontEnd/" element={<HomePage />} />
          <Route path="/RecipeBookFrontEnd/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
