

import { ChangeEvent, PropsWithChildren } from "react";
import InputSearch from "../searchInput";
import recipes from "../../data/recipes";
import "./style.css";
import { filterByDescription, filterByIngredient, filterByName } from "../../features/searchRecipes/generalSearch";
function Banner(props: PropsWithChildren) {

  // TODO: [currentRecipes, setCurrentRecipes] = useState(null)
  const { children } = props;
  const listOfRecipesImages = recipes.map((recipe) => recipe.image);

  const randomizeSrcImage = (): string => {
    const randomIndex = Math.floor(Math.random() * 50);
    return `src/assets/image_recipes/${listOfRecipesImages[randomIndex]}`;
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
 
  return (
    <div className="banner">
      {children}
      <div className="search-recipe">
        <h1>
          CHERCHEZ PARMI PLUS DE 1500 RECETTES DU QUOTIDIEN,SIMPLES ET
          DÉLICIEUSES
        </h1>
        <InputSearch
          className="general-search"
          type="text"
          placeholder="Recherchez une recette, un ingrédient..."
          handleChangeInput={handleSearch}
        />
      </div>
      <img
        id="banner-img"
        src={randomizeSrcImage()}
        alt="photo de couverture"
      />
    </div>
  );
}

export default Banner;
