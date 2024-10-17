import { ChangeEvent, PropsWithChildren, useContext } from "react";
import { randomizeSrcImage } from "../../utils/randomizeImage";
import InputSearch from "../searchInput";
import { RecipesContext } from "../../context/recipesContext";
import { RecipesContextType } from "../../types/recipesContext";
import "./style.css";

function Banner(props: PropsWithChildren) {
  const { children } = props;
  
  const {generalSearch} = useContext(RecipesContext) as RecipesContextType;
 
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const inputValue = e.target.value
    generalSearch(inputValue);
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
