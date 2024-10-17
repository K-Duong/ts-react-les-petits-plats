import { useContext } from "react"
import { RecipesContext } from "../../context/recipesContext"
import { RecipesContextType } from "../../types/recipesContext"

import "./style.css"


function HomePage ()  {
  const {currentRecipes} = useContext(RecipesContext) as RecipesContextType;
  // console.log(currentRecipes);
  const NumberOfResult = () => {
    if (currentRecipes.length === 0) {
      return <h2 className="no-recipe-found">No recipe found!</h2>
    } else if (currentRecipes.length === 1) {
      
      return <p className="number-result">Une recette retrouvée</p>
    } else if (currentRecipes.length > 1) {
      return <p className="number-result">${currentRecipes.length} recettes retrouvées</p>
    } else {
      return
    }
    
  }
  
  return (<div className="home-content">
    <NumberOfResult/>
  </div>)
  }
  
  export default HomePage