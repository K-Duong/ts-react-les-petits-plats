import { useContext } from "react";

import { RecipesContext } from "../../context/recipesContext";
import { RecipesContextType } from "../../types/recipesContext";

import DropdownMenu from "../../components/dropdownMenu";
import CardRecipe from "../../components/cardRecipe";

import "./style.css";
function HomePage() {
  const { currentRecipes, dropdownLists, advancedSearch } = useContext(
    RecipesContext
  ) as RecipesContextType;

  const NumberOfResult = () => {
    if (currentRecipes.length === 0) {
      return <p className="number-result">Recette non trouvée</p>;
    } else if (currentRecipes.length === 1) {
      return <p className="number-result">Une recette retrouvée</p>;
    } else if (currentRecipes.length > 1) {
      return (
        <p className="number-result">
          {currentRecipes.length < 10 ? "0" : ""}{currentRecipes.length} recettes retrouvées
        </p>
      );
    } else {
      return;
    }
  };

  return (
    <div className="home-content">
      <div className="dropdown-and-number-result">
        <div className="dropdown-items">
          <DropdownMenu
            dropdownType="Ingredients"
            dropdownList={dropdownLists?.ingredients || []}
            // TODO: handle debounce here
            handleAdvancedSearch={(e) => advancedSearch(e.target.value)}
          />
          <DropdownMenu
            dropdownType="Ustensils"
            dropdownList={dropdownLists?.ustensils || []}
            // TODO: handle debounce here
            handleAdvancedSearch={(e) => advancedSearch(e.target.value)}
          />
          <DropdownMenu
            dropdownType="Appliances"
            dropdownList={dropdownLists?.appliances || []}
            // TODO: handle debounce here
            handleAdvancedSearch={(e) => advancedSearch(e.target.value)}
          />
        </div>
        <NumberOfResult />
      </div>
      <div className="list-of-tags">

      </div>
      <div className="list-of-cards">
       {currentRecipes.map (recipe => <CardRecipe key={recipe.name} recipe={recipe}/>)}
      </div>
    </div>
  );
}

export default HomePage;
